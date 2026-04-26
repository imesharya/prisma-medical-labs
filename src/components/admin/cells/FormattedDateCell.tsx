'use client'
import { Link } from '@payloadcms/ui'

const FormattedDateCell: React.FC<any> = ({ cellData, rowData }) => {
  if (!cellData || !rowData?.id) {
    return <span className="text-gray-400">-</span>
  }

  const formatted = new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Asia/Riyadh',
  }).format(new Date(cellData))

  return (
    <Link
      href={`/admin/collections/consultation-time-slots/${rowData.id}`}
      className="hover:underline text-inherit"
    >
      {formatted}
    </Link>
  )
}

export default FormattedDateCell
