import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export function calculateReadTime(content: SerializedEditorState | null | undefined): string {
  if (!content?.root?.children) return '1 دقيقة قراءة'

  let wordCount = 0

  const countWords = (nodes: any[]) => {
    nodes.forEach((node) => {
      if (node.text) {
        wordCount += (node.text as string).trim().split(/\s+/).filter(Boolean).length
      }
      if (node.children) {
        countWords(node.children)
      }
    })
  }

  countWords(content.root.children)

  const minutes = Math.max(1, Math.ceil(wordCount / 200))

  const getArabicMinuteLabel = (n: number): string => {
    if (n === 1) return 'دقيقة قراءة'
    if (n === 2) return 'دقيقتا قراءة'
    if (n >= 3 && n <= 10) return 'دقائق قراءة'
    return 'دقيقة قراءة'
  }

  return `${minutes} ${getArabicMinuteLabel(minutes)}`
}
