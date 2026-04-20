import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { jsxConverter } from './JSXConverter'
import { HTMLAttributes } from 'react'

type Props = {
  data: SerializedEditorState | null | undefined
} & HTMLAttributes<HTMLDivElement>

const RichText = (props: Props) => {
  const { data, className, ...rest } = props
  if (!data) return null

  return <RichTextConverter {...rest} data={data} className={className} converters={jsxConverter} />
}

export default RichText
