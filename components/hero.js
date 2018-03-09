import initHeroViz from '../lib/hero-viz'
import Header from './header'
import {
  type,
  margins,
  columns,
  layout,
  navHeight,
  colors
} from '../lib/styles'

export default () => {
  return (
    <div className='wrapper'>
      <div className='viz' />
      <div className='inner'>
        <Header
          eyebrow='Pixel Unicorns'
          copy='Design & dev. studio based in NYC'
        />
        <h2>
          We’re a software design and development studio that builds web and mobile products for our clients.
        </h2>
      </div>
      <style jsx>{`
      .viz {
        background-color: #eee;
        position: absolute;
        z-index: -1;
      }
      .wrapper {
        height: 100vh;
        padding-top: ${navHeight}px;
        padding-bottom: ${navHeight}px;
      }
      ${layout('.wrapper')}
      .inner {
        top: 50%;
        position: relative;
        transform: translateY(-50%);
      }
      h2 {
        ${type.metaSerifL}
        ${columns(7)}
      }
      @media screen and (max-width: 480px) {
        h2 {
          ${type.metaSerifM}
        }
      }
    `}</style>
    </div>
  )
}
