const CustomBadgeIcon = ({ html }: { html?: string | null }) => {
  if (!html?.trim()) {
    // Default fallback dot
    return null
  }

  return (
    <span
      className="inline-flex items-center justify-center shrink-0 leading-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default CustomBadgeIcon
