import initHeroViz from '../lib/hero-viz'
import {
  type,
  margins,
  columns,
  layout,
  navHeight,
  colors
} from '../lib/styles'

export default ({ eyebrow, copy }) => {
  return (
    <div>
      <h3>{eyebrow}</h3>
      <h1>{copy}</h1>
      <style jsx>{`
        div {
          ${columns(7)}
        }
        h1 {
          ${type.nimbusM}
          font-weight: bold;
        }
        h3 {
          ${type.sourceCodeLabelL}
          font-weight: bold;
          margin-bottom: ${margins.xs}px;
          color: ${colors.blue1};
        }
        @media screen and (max-width: 480px) {
          h1 {
            ${type.nimbusS}
          }
          h3 {
            ${type.sourceCodeLabelM}
          }
        }
      `}</style>
    </div>
  )
}
