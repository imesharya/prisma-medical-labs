const STORAGE_URL = process.env.R2_PUBLIC_DOMAIN

interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function cloudflareLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  if (src.startsWith('/')) {
    return src
  }

  if (!STORAGE_URL) {
    return src
  }

  const params = [`width=${width}`, `quality=${quality}`, 'format=auto']

  try {
    const url = new URL(src)

    if (STORAGE_URL && url.origin === new URL(STORAGE_URL).origin) {
      const path = url.pathname + url.search
      return `${STORAGE_URL}/cdn-cgi/image/${params.join(',')}${path}`
    }

    return src
  } catch {
    return src
  }
}
