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
      {eyebrow && <h3>{eyebrow}</h3>}
      <h1>{copy}</h1>
      <style jsx>{`
        div {
          ${layout.desktop}
          ${eyebrow && 'margin-bottom: -20px'};
        }
        @media screen and (max-width: 480px) {
          div {
            ${layout.mobile}
          }
        }
        h3, h1 {
          ${columns(7)}
        }
        h1 {
          ${eyebrow ? type.nimbusM : type.nimbusL}
          font-weight: ${eyebrow ? 'bold' : '500'};
        }
        h3 {
          ${type.sourceCodeLabelL}
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
