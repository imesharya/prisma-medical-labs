import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { ComponentType } from 'react'

const icons = Object.fromEntries(
  Object.entries(dynamicIconImports).map(([name, importFn]) => [name, dynamic(importFn)]),
) as Record<keyof typeof dynamicIconImports, ComponentType<LucideProps>>

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name]
  return <LucideIcon {...props} />
}
