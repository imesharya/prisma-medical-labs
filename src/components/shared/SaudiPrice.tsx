interface SaudiPriceProps {
  amount: number | string
  className?: string
}

export default function SaudiPrice({ amount, className = '' }: SaudiPriceProps) {
  return (
    /* `dir="ltr"` forces the symbol to stay on the left even if the parent container 
      is using Arabic right-to-left (RTL) reading direction.
      `items-baseline` prevents vertical shifting between the symbol and numbers on mobile browsers.
    */
    <span className={`inline-flex items-baseline gap-1 ${className}`} dir="ltr">
      {/* The specific unicode '&#xea;' is required by the font. 
        text-[1em] forces the symbol to match the exact font size of the surrounding text.
      */}
      <span className="icon-saudi_riyal text-[1em] font-normal leading-none">&#xea;</span>
      <span>{amount}</span>
    </span>
  )
}
