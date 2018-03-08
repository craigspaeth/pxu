import initHeroViz from '../lib/hero-viz'
import { margins, type } from '../lib/styles'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { scrollTop: 0 }
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
    this.setState({ scrollTop })
  }

  render () {
    return (
      <header>
        <nav>
          <img src='/static/logo.png' />
          <a>What we do</a>
          <a>Who we are</a>
          <a>Hire us</a>
        </nav>
        <style jsx>{`
    a, img {
      display: inline-block;
      vertical-align: middle;
      margin-right: ${margins.m}px;
    }
    a {
      ${type.helveticaL}
      font-weight: bold;
    }
    nav {
      padding: ${margins.xs}px;
      transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
      ${this.state.scrollTop > 0 && `
      background: white;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
      `}
    }
    @media screen and (max-width: 480px) {
      a {
        ${type.helveticaM}
        font-weight: bold;
      }
      a, img {
        margin-right: ${margins.s}px;
      }
    }
    header {
      position: fixed;
      width: 100%;
    }
  `}</style>
      </header>
    )
  }
}
