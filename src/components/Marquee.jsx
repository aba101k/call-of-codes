const ITEMS = [
  'SOFTWARE DEV',
  'IOT & AI',
  'INTERNSHIPS',
  'TRAINING',
  'SOLUTIONS',
  'KIGALI',
  'CALL OF CODES',
]

export default function Marquee() {
  const content = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {content.map((item, i) => (
          <span className="m-item" key={`${item}-${i}`}>
            {item}
            <b>//</b>
          </span>
        ))}
      </div>
    </div>
  )
}
