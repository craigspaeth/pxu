import initHeroViz from '../lib/hero-viz'
import { margins, type, colors } from '../lib/styles'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { belowHero: false }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const doc = document.documentElement
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
    const scrollTop =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    this.setState({ belowHero: scrollTop > window.innerHeight / 2 - 300 })
  }

  render () {
    return (
      <header>
        <nav>
          <div
            onClick={() => this.props.scrollTo('heroTop')}
            className='logo'
          />
          <a
            className={this.props.highlightedIndex == 0 && 'highlighted'}
            onClick={() => this.props.scrollTo('whatWeDo')}
          >
            What we do
          </a>
          <a
            className={this.props.highlightedIndex == 1 && 'highlighted'}
            onClick={() => this.props.scrollTo('whoWeAre')}
          >
            Who we are
          </a>
          <a
            className={this.props.highlightedIndex == 2 && 'highlighted'}
            onClick={() => this.props.scrollTo('workWithUs')}
          >
            Work with us
          </a>
        </nav>
        <style jsx>{`
    a, {
      display: inline-block;
      margin-right: ${margins.m}px;
    }
    a {
      ${type.helveticaL}
      font-weight: bold;
      cursor: pointer;
      position: relative;
      top: 3px;
      transition: color 0.3s ease-in-out;
    }
    a.highlighted {
      color: ${colors.blue1};
    }
    a:hover {
      color: ${colors.blue1};
    }
    .logo {
      background: ${this.state.belowHero ? 'url(/static/logo-s.png)' : 'url(/static/logo.png)'} no-repeat;
      display: inline-block;
      vertical-align: ${this.state.belowHero ? 'middle' : 'bottom'};
      width: ${this.state.belowHero ? '50px' : '147px'};
      height: ${this.state.belowHero ? '50px' : '55px'};
      margin-right: ${this.state.belowHero ? margins.m : margins.l}px;
      cursor: pointer;
    }
    nav {
      padding: ${this.state.belowHero ? margins.xs : margins.m}px;
      width: 100%;
      ${this.state.belowHero && `
        background: white;
        box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
      `}
    }
    header {
      position: fixed;
      width: 100%;
      z-index: 2
    }
    @media screen and (max-width: 480px) {
      a {
        ${type.helveticaM}
        font-weight: bold;
      }
      a, img {
        margin-right: ${margins.s}px;
      }
      .logo {
        height: 50px;
        width: 50px;
        vertical-align: middle;
        background: url(/static/logo-s.png) no-repeat;
        margin-right: ${margins.m}px;
      }
      nav {
        padding: ${margins.xs}px;
      }
    }
  `}</style>
      </header>
    )
  }
}
