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
      <div className='left' />
      <div className='right'>
        <Blurb
          icon='/static/ui-icon.svg'
          header='UI Design'
          paragraph='Our products not only function well but they look great doing it. We’ve worked on a spectrum of digital products from highly technical internal tools to brand-forward marketing websites.\n\nWhether you’re a startup putting your app out there for the first time, or a fortune 500 company releasing their corporate responsibility microsite, we’ll make sure every pixel is in place and your product is putting on its best suit on.'
        />
      </div>
      <style jsx>{`
      .wrapper {
        ${layout.desktop}
        margin: ${margins.xxl}px auto;
        display: flex;
      }
      .left {
        ${columns(5)}
        width: 100%;
        margin-right: ${gutterSize}px;
      }
      .right {
        ${columns(4)}
      }
      @media screen and (max-width: 480px) {
        .wrapper {
          ${layout.mobile}
          margin: ${margins.l}px auto;
        }
      }
      `}</style>
    </div>
  )
}
