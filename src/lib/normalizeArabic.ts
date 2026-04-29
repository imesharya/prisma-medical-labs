// Normalize Arabic text: treat أ, إ, آ, ٱ, and ا as the same character
export const normalizeArabic = (str: string): string => {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim()
}
