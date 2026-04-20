import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

import RichText from './RichText'
import { AlertCircle } from 'lucide-react'

type DisclaimerBlockFields = {
  title: string
  content: SerializedEditorState
  variant?: 'default' | 'warning' | 'info' | 'error'
}

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<DisclaimerBlockFields>
const variantStyles = {
  default: {
    bg: 'bg-card',
    border: 'border-border',
    icon: 'text-muted-foreground',
    title: 'text-foreground',
    content: 'text-muted-foreground',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-950/20',
    border: 'border-yellow-200 dark:border-yellow-900/50',
    icon: 'text-yellow-600 dark:text-yellow-500',
    title: 'text-yellow-900 dark:text-yellow-100',
    content: 'text-yellow-800 dark:text-yellow-200',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-200 dark:border-blue-900/50',
    icon: 'text-blue-600 dark:text-blue-500',
    title: 'text-blue-900 dark:text-blue-100',
    content: 'text-blue-800 dark:text-blue-200',
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-900/50',
    icon: 'text-red-600 dark:text-red-500',
    title: 'text-red-900 dark:text-red-100',
    content: 'text-red-800 dark:text-red-200',
  },
}

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    disclaimer: ({ node }: { node: SerializedBlockNode<DisclaimerBlockFields> }) => {
      const styles = variantStyles[node.fields.variant ?? 'default']

      return (
        <div
          className={`${styles.bg} ${styles.border} border rounded-xl p-4 sm:p-6 backdrop-blur-sm`}
        >
          <div className="grid grid-cols-[auto_1fr] gap-x-3">
            {/* 1. icon – top-start corner */}
            <AlertCircle className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.icon}`} />

            {/* 2. title – first line sits right next to the icon */}
            <h3 className={`${styles.title} font-semibold text-sm sm:text-base not-prose`}>
              {node.fields.title}
            </h3>

            {/* 3. content – starts under title, aligned with title start */}
            <div className="col-start-2">
              <RichText data={node.fields.content} />
            </div>
          </div>
        </div>
      )
    },
  },
})
