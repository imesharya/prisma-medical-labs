import path from 'path'
import fs from 'fs'

import { CloudflareContext, getCloudflareContext } from '@opennextjs/cloudflare'
import { GetPlatformProxyOptions } from 'wrangler'

import { buildConfig } from 'payload'
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite'
import { r2Storage } from '@payloadcms/storage-r2'
import { en } from '@payloadcms/translations/languages/en'
import { ar } from '@payloadcms/translations/languages/ar'

import { TestCategories } from './collections/TestCategories'
import { Tests } from './collections/Tests'
import { PackageCategories } from './collections/PackageCategories'
import { Packages } from './collections/Packages'
import { PackageTypes } from './collections/PackageTypes'
import { Media } from './collections/media'
import { fileURLToPath } from 'url'
import { BlogCategories } from './collections/BlogCategories'
import { BlogPosts } from './collections/BlogPost'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ConsultationRequests } from './collections/consultations/ConsultationRequests'
import { ConsultationTimeSlots } from './collections/consultations/ConsultationTimeSlots'
import { Consultations } from './collections/consultations/Consultations'
import { ConsultationScheduleTemplates } from './collections/consultations/ConsultationScheduleTemplates'
import { HomeVisitRequests } from './collections/home-visit/HomeVisitRequests'
import { HomeVisitTimeSlots } from './collections/home-visit/HomeVisitTimeSlots'
import { HomeVisitScheduleTemplates } from './collections/home-visit/HomeVisitScheduleTemplates'
import { HomeVisits } from './collections/home-visit/HomeVisits'
import { ContactMessages } from './collections/ContactMessages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const realpath = (value: string) => (fs.existsSync(value) ? fs.realpathSync(value) : undefined)

const isCLI = process.argv.some((value) =>
  realpath(value)?.endsWith(path.join('payload', 'bin.js')),
)
const isProduction = process.env.NODE_ENV === 'production'

const createLog =
  (level: string, fn: typeof console.log) => (objOrMsg: object | string, msg?: string) => {
    if (typeof objOrMsg === 'string') {
      fn(JSON.stringify({ level, msg: objOrMsg }))
    } else {
      fn(JSON.stringify({ level, ...objOrMsg, msg: msg ?? (objOrMsg as { msg?: string }).msg }))
    }
  }

const cloudflareLogger = {
  level: process.env.PAYLOAD_LOG_LEVEL || 'info',
  trace: createLog('trace', console.debug),
  debug: createLog('debug', console.debug),
  info: createLog('info', console.log),
  warn: createLog('warn', console.warn),
  error: createLog('error', console.error),
  fatal: createLog('fatal', console.error),
  silent: () => {},
} as any // Use PayloadLogger type when it's exported

const cloudflare =
  isCLI || !isProduction
    ? await getCloudflareContextFromWrangler()
    : await getCloudflareContext({ async: true })

export default buildConfig({
  collections: [
    Media,
    TestCategories,
    Tests,
    PackageTypes,
    PackageCategories,
    Packages,
    BlogCategories,
    BlogPosts,

    ConsultationRequests,
    ConsultationTimeSlots,
    ConsultationScheduleTemplates,
    Consultations,

    HomeVisitRequests,
    HomeVisitTimeSlots,
    HomeVisitScheduleTemplates,
    HomeVisits,

    ContactMessages,
  ],
  admin: {
    timezones: {
      defaultTimezone: 'Asia/Riyadh',
      supportedTimezones: [{ label: 'Riyadh', value: 'Asia/Riyadh' }],
    },
    meta: {
      titleSuffix: '- مختبرات بريزما',
      title: 'لوحة التحكم',
      icons: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          url: '/favicon.ico',
        },
      ],
      openGraph: {
        title: 'لوحة التحكم',
        description: 'لوحة التحكم مختبرات بريزما',
        images: [`${process.env.NEXT_PUBLIC_SERVER_URL}/prisma-logo.png`],
      },
    },
    components: {
      graphics: {
        Logo: '@/components/admin/brand/Logo',
        Icon: '@/components/admin/brand/Icon',
      },
    },
  },

  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  i18n: {
    fallbackLanguage: 'ar',
    supportedLanguages: { ar, en },
  },
  editor: lexicalEditor({}),
  db: sqliteD1Adapter({ binding: cloudflare.env.D1, idType: 'uuid' }),
  logger: isProduction ? cloudflareLogger : undefined,
  plugins: [
    r2Storage({
      bucket: cloudflare.env.R2,
      collections: {
        media: {
          generateFileURL: isProduction
            ? ({ filename, prefix }) => {
                const path = prefix ? `${prefix}/${filename}` : filename
                return `${process.env.R2_PUBLIC_DOMAIN}/${path}`
              }
            : undefined,
        },
      },
    }),
  ],
  bin: [
    {
      key: 'seed',
      scriptPath: path.resolve(dirname, 'scripts/seed.ts'),
    },
  ],
})

// Adapted from https://github.com/opennextjs/opennextjs-cloudflare/blob/d00b3a13e42e65aad76fba41774815726422cc39/packages/cloudflare/src/api/cloudflare-context.ts#L328C36-L328C46
function getCloudflareContextFromWrangler(): Promise<CloudflareContext> {
  return import(/* webpackIgnore: true */ `${'__wrangler'.replaceAll('_', '')}`).then(
    ({ getPlatformProxy }) =>
      getPlatformProxy({
        environment: process.env.CLOUDFLARE_ENV,
        remoteBindings: isProduction,
      } satisfies GetPlatformProxyOptions),
  )
}
