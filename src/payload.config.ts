import sharp from 'sharp'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { en } from '@payloadcms/translations/languages/en'
import { ar } from '@payloadcms/translations/languages/ar'
// import imagekitPlugin from 'payloadcms-plugin-imagekit'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { TestCategories } from './collections/TestCategories'
import { Tests } from './collections/Tests'
import { PackageCategories } from './collections/PackageCategories'
import { Packages } from './collections/Packages'
import { PackageTypes } from './collections/PackageTypes'
import { Media } from './collections/media'
import path from 'path'
import { fileURLToPath } from 'url'
import { BlogCategories } from './collections/BlogCategories'
import { BlogPosts } from './collections/BlogPost'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Consultations } from './collections/Consultations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Define and configure your collections in this array
  collections: [
    Media,
    TestCategories,
    Tests,
    PackageTypes,
    PackageCategories,
    Packages,
    BlogCategories,
    BlogPosts,
    Consultations,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  i18n: {
    fallbackLanguage: 'ar',
    supportedLanguages: { ar, en },
  },
  sharp,
  editor: lexicalEditor({}),
  plugins: [
    // imagekitPlugin({
    //   config: {
    //     publicKey: process.env.IK_PUBLIC_KEY!,
    //     privateKey: process.env.IK_PRIVATE_KEY!,
    //     endpoint: process.env.IK_ENDPOINT!,
    //   },
    //   collections: {
    //     media: {
    //       uploadOption: {
    //         folder: 'prisma-medical-labs',
    //         // extensions: [
    //         //   {
    //         //     name: 'aws-auto-tagging',
    //         //     minConfidence: 80, // only tags with a confidence value higher than 80% will be attached
    //         //     maxTags: 10, // a maximum of 10 tags from aws will be attached
    //         //   },
    //         //   {
    //         //     name: 'google-auto-tagging',
    //         //     minConfidence: 70, // only tags with a confidence value higher than 70% will be attached
    //         //     maxTags: 10, // a maximum of 10 tags from google will be attached
    //         //   },
    //         // ],
    //       },
    //       // savedProperties: ['url', 'AITags'],
    //     },
    //   },
    // }),
    vercelBlobStorage({
      enabled: true, // defaults to true
      token: process.env.BLOB_READ_WRITE_TOKEN, // Required

      // Specify which upload collections use Vercel Blob
      collections: {
        media: true, // 'media' must match your collection slug
        // You can add more:
        // documents: true,
        // videos: {
        //   prefix: 'videos/',         // Optional: organize files in folders
        // },
      },

      // Optional but recommended settings
      addRandomSuffix: true, // Prevents filename collisions
      cacheControlMaxAge: 31536000, // 1 year (default)
      clientUploads: true, // Highly recommended on Vercel (see below)
    }),
  ],
  bin: [
    {
      key: 'seed',
      scriptPath: path.resolve(dirname, 'scripts/seed.ts'),
    },
  ],
})
