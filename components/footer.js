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
      <p>
        info@pixelunicorns.com<br />
        © 2018 PixelUnicorns LLC
      </p>
      <a>Back to top</a>
      <style jsx>{`
        div {
          border-top: 1px solid ${colors.gray6};
          margin: auto;
          padding-top: ${margins.s}px;
          position: relative;
          ${columns(3)}
        }
        p {
          ${type.sourceCodeCaptionM}
        }
        a {
          ${type.helveticaM}
          font-weight: bold;
          background: url(/static/footer-arrow.svg) no-repeat right;
          padding-right: 36px;
          height: 26px;
          line-height: 26px;
          position: absolute;
          right: 0;
        }
        a, p {
          display: inline-block;
          vertical-align: top;
        }
        @media screen and (max-width: 480px) {
          div {
            width: 100%;
            max-width: 100%;
            padding: ${margins.s}px;
          }
          a {
            right: ${margins.s}px;
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  )
}
