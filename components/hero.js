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
import copy from '../lib/copy.json'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { vizLoaded: false }
  }

  componentDidMount () {
    if (typeof window === 'undefined') return
    initHeroViz(this.refs.viz, () => {
      this.setState({ vizLoaded: true })
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <div ref='viz' className='viz' />
        <div className='inner'>
          <Header copy={copy.hero.h} />
          <div className='h2wrapper'>
            <h2>{copy.hero.p}</h2>
          </div>
        </div>
        <div className='arrow' onClick={() => this.props.scrollTo('whatWeDo')}>
          <Arrow />
        </div>
        <style jsx>{`
        .arrow {
          position: absolute;
          bottom: ${margins.l}px;
          left: 50%;
          cursor: pointer;
          transform: translateX(-50%);
        }
        .viz {
          position: absolute;
          left: 0;
          top: 0;
          transition: opacity 1.7s cubic-bezier(0.550, 0.055, 0.675, 0.190);
          opacity: ${this.state.vizLoaded ? 0.7 : 0};
        }
        .viz:after, .viz:before {
          content: '.';
          color: transparent;
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
          height: 50%;
        }
        .viz:after {
          background: linear-gradient(rgba(255,255,255,0), white);
        }
        .wrapper {
          height: 100vh;
          max-width: 100vw;
          overflow: hidden;
          padding-top: ${navHeight}px;
          padding-bottom: ${navHeight}px;
          margin-bottom: ${margins.xxxxl}px;
        }
        .inner {
          top: 50%;
          position: absolute;
          left: 35px;
          transform: translateY(-50%);
          max-width: 755px;
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
          margin: 0;
        }
        @media screen and (max-width: 480px) {
          .wrapper {
            margin-bottom: ${margins.l}px;
          }
          h2 {
            ${type.metaSerifM}
          }
          .h2wrapper {
            ${layout.mobile}
          }
          .inner {
            left: 0;
          }
          .arrow {
            transform: translateX(-50%) scale(0.7);
            bottom: 0;
          }
        }
      `}</style>
      </div>
    )
  }
}
