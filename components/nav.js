import initHeroViz from '../lib/hero-viz'
import { margins, type, colors } from '../lib/styles'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { scrollingDir: 'down', belowHero: false, previouScrollTop: 0 }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const doc = document.documentElement
    const scrollTop =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    const dir = scrollTop > this.state.previouScrollTop ? 'down' : 'up'
    this.setState({
      scrollingDir: dir,
      previouScrollTop: scrollTop,
      belowHero: scrollTop > window.innerHeight / 2
    })
  }

  nav () {
    return (
      <nav>
        <div onClick={() => this.props.scrollTo('heroTop')} className='logo' />
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
        <style jsx>
          {`
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
          @media screen and (max-width: 480px) {
            a {
              ${type.helveticaM}
              font-weight: bold;
            }
            a, .logo {
              margin-right: ${margins.xs}px;
            }
            a:last-child {
              margin-right: 0;
            }
            .logo {
              height: 40px;
              width: 40px;
              vertical-align: middle;
              background: url(/static/logo-s.png) no-repeat;
              background-size: contain;
            }
            nav {
              padding: ${margins.xs}px;
            }
          }
          `}
        </style>
      </nav>
    )
  }

  render () {
    return (
      <div>
        <header>{this.nav()}</header>
        <header className='sticky'>{this.nav()}</header>
        <style jsx>
          {`
          header:not(.sticky) {
            position: relative;
            width: 100%;
            z-index: 2;
            max-width: 100vw;
            overflow: hidden;
          }
          header.sticky {
            position: fixed;
            top: 0;
            transform: translateY(${this.state.scrollingDir == 'down' && this.state.belowHero ? 'calc(-100% - 10px)' : '0'});
            transition: transform ease-in-out 0.2s;
            display: ${this.state.belowHero ? 'block' : 'none'};
            width: 100%;
            z-index: 2
          }
        `}
        </style>
      </div>
    )
  }
}
