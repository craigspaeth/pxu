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

export default class extends React.Component {
  constructor () {
    super()
    this.state = { vizLoaded: false }
  }
  componentDidMount () {
    initHeroViz(this.refs.viz, () => {
      this.setState({ vizLoaded: true })
    })
  }
  render () {
    return (
      <div className='wrapper'>
        <div ref='viz' className='viz' />
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
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
          transition: opacity 0.5s cubic-bezier(0.550, 0.055, 0.675, 0.190);
          opacity: ${this.state.vizLoaded ? 1 : 0};
        }
        .wrapper {
          height: 100vh;
          padding-top: ${navHeight}px;
          padding-bottom: ${navHeight}px;
          ${layout.desktop}
        }
        .inner {
          top: 50%;
          position: relative;
          transform: translateY(-50%);
        }
        .imgref {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          transform: translate(-50%, -50%);
          opacity: 0.2;
        }
        h2 {
          ${type.metaSerifL}
          ${columns(7)}
        }
        @media screen and (max-width: 480px) {
          h2 {
            ${type.metaSerifM}
          }
          .wrapper {
            ${layout.mobile}
          }
        }
      `}</style>
      </div>
    )
  }
}
