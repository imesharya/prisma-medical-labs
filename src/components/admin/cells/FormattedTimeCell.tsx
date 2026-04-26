'use client'

const FormattedTimeCell: React.FC<any> = ({ cellData }) => {
  if (!cellData) return <span className="text-gray-400">-</span>

  const formatted = new Intl.DateTimeFormat('ar-EG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Riyadh',
  }).format(new Date(cellData))

  return <span>{formatted}</span>
}

export default FormattedTimeCell
