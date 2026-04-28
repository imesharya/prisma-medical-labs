export default function Logo() {
  return (
    <>
      <style>{`
        [data-theme="dark"] img[data-logo="prisma"] {
          filter: brightness(0%) invert(100%);
        }
      `}</style>
      <img data-logo="prisma" src={'/prisma-logo.png'} alt="شعار مختبرات بريزما" />
    </>
  )
}
