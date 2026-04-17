import localFont from 'next/font/local'

export const tajawal = localFont({
  variable: '--font-tajawal',
  src: [
    {
      path: '../../../../public/fonts/Tajawal-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Tajawal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Tajawal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Tajawal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Tajawal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Tajawal-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Tajawal-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  declarations: [
    { prop: 'ascent-override', value: '95%' },
    { prop: 'descent-override', value: '35%' },
    { prop: 'line-gap-override', value: '0%' },
  ],
})
