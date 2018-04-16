import {
  columns,
  margins,
  type,
  columnList,
  layout,
  gutterSize
} from '../lib/styles'
import Blurb from './blurb'
import copy from '../lib/copy'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb-container'>
          <div className='blurb-wrapper'>
            <Blurb
              icon='/static/ui-icon.svg'
              header={copy.uiSection.h}
              paragraph={copy.uiSection.p}
            />
          </div>
        </div>
      </div>
      <div className='img' />
      <style jsx>{`
      .wrapper {
        padding-bottom: ${margins.xxxl}px;
      }
      .inner {
        ${layout.desktop}
        margin: ${margins.xxl}px auto -200px auto;
      }
      .blurb-wrapper {
        ${columns(4)}
      }
      .blurb-container {
        ${columns(8)}
        margin: auto;
      }
      .img {
        background: url(/static/ui-ux-graphic.png) center no-repeat;
        height: 615px;
        width: 100%;
      }
      @media screen and (max-width: 1200px) {
        .img {
          background-size: 400%;
          background-position: calc(50% - 35px) bottom;
        }
      }
      @media screen and (max-width: 900px) {
        .wrapper {
          padding-bottom: ${margins.l}px;
        }
        .img {
          height: 500px;
        }
      }
      @media screen and (max-width: 480px) {
        .wrapper {
          margin: 0;
          padding-bottom: 0;
        }
        .inner {
          ${layout.mobile}
          margin-top: ${margins.l}px;
        }
        .img {
          height: 400px;
        }
      }
      `}</style>
    </div>
  )
}
