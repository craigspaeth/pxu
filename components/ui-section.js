import {
  columns,
  margins,
  type,
  columnList,
  layout,
  gutterSize
} from '../lib/styles'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb-container'>
          <div className='blurb-wrapper'>
            <Blurb
              icon='/static/ui-icon.svg'
              header='UI Design'
              paragraph='Our products not only function well but they look great doing it. We’ve worked on a spectrum of digital products from highly technical internal tools to brand-forward marketing websites.<br/><br/>Whether you’re a startup putting your app out there for the first time, or a fortune 500 company releasing their corporate responsibility microsite, we’ll make sure every pixel is in place and your product is putting on its best suit on.'
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
          margin: ${margins.l}px auto;
        }
        .inner {
          ${layout.mobile}
        }
        .img {
          height: 400px;
        }
      }
      `}</style>
    </div>
  )
}
