import initHeroViz from '../lib/hero-viz'
import Header from './header'
import Arrow from '../components/arrow'
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
          <div className='h2wrapper'>
            <h2>
              We’re a software design and development studio that builds web and mobile products for our clients.
            </h2>
          </div>
        </div>
        <div className='arrow'>
          <Arrow />
        </div>
        <style jsx>{`
        .arrow {
          position: absolute;
          bottom: ${margins.l}px;
          left: 50%;
        }
        .viz {
          position: absolute;
          left: 0;
          top: 0;
          transition: opacity 0.5s cubic-bezier(0.550, 0.055, 0.675, 0.190);
          background: linear-gradient(${colors.gray6}, white);
          opacity: ${this.state.vizLoaded ? 0.7 : 0};
        }
        .wrapper {
          height: 100vh;
          padding-top: ${navHeight}px;
          padding-bottom: ${navHeight}px;
          margin-bottom: ${margins.xxxl}px;
          background: linear-gradient(${colors.gray6}, white);
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
        .h2wrapper {
          ${layout.desktop}
        }
        h2 {
          ${type.metaSerifL}
          ${columns(7)}
          margin: 0;
        }
        @media screen and (max-width: 480px) {
          h2 {
            ${type.metaSerifM}
          }
          .h2wrapper {
            ${layout.mobile}
          }
        }
      `}</style>
      </div>
    )
  }
}
