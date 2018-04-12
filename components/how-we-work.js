import {
  columns,
  layout,
  columnList,
  colors,
  type,
  margins,
  gutterSize,
  footerHeight,
  navHeight
} from '../lib/styles'
import Blurb from './blurb'
import ContactForm from '../components/contact-form'
import Arrow from '../components/arrow'
import Waypoint from 'react-waypoint'
import Animation from './animation'
import _ from 'lodash'

const paragraphs = [
  'In our projects we follow a core set of values and process that guide us. Let’s take a look.',
  'Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?',
  'Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?',
  'Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?',
  'Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
]

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      animationIndex: 0,
      scrolling: false,
      scrollingUp: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    clearTimeout(this.isScrolling)
    this.setState({ scrolling: true })
    this.isScrolling = setTimeout(() => {
      this.setState({ scrolling: false })
    }, 3000)
  }

  setAnimation = i => e => {
    if (i == 4 && e.previousPosition == 'above') return
    this.setState({ scrollingUp: e.previousPosition == 'above' })
    this.setState({ animationIndex: i })
  }

  prepareRestartAnimation = e => {
    if (e.previousPosition === 'above') this.setState({ scrollingUp: true })
  }

  canShowIndicator () {
    return (
      !this.state.scrolling &&
      this.state.animationIndex > 0 &&
      this.state.animationIndex < 5 &&
      !this.state.scrollingUp > 0
    )
  }

  scrollToTop = () => {
    console.log(this.refs)
    window.scroll({
      top: this.refs.intro.offsetTop - 200,
      left: 0,
      behavior: 'smooth'
    })
  }

  render () {
    return (
      <div>
        <div className='intro' ref='intro'>
          <Waypoint onEnter={this.setAnimation(0)} />
          <Blurb
            icon='/static/muscle.svg'
            header='How we work'
            paragraph={paragraphs[0]}
          />
        </div>
        <div className='wrapper'>
          <div className='left'>
            <div className='bottom-arrow'>
              <small>Scroll</small>
              <Arrow />
            </div>
            <div className='up-arrow' onClick={this.scrollToTop}>
              <Arrow />
            </div>
            <Animation
              animationIndex={this.state.animationIndex}
              scrollingUp={this.state.scrollingUp}
            />
          </div>
          <div className='right'>
            <ol>
              <li>
                <img
                  src='/static/how-we-work/one.png'
                  className='mobile-only'
                />
                <div className='blurb-container'>
                  <div className='waypoint'>
                    <Waypoint onEnter={this.setAnimation(1)} />
                  </div>
                  <Blurb
                    header='First—the fundamentals'
                    paragraph={paragraphs[1]}
                  />
                </div>
              </li>
              <li>
                <img
                  src='/static/how-we-work/two.png'
                  className='mobile-only'
                />
                <div className='blurb-container'>
                  <div className='waypoint'>
                    <Waypoint onEnter={this.setAnimation(2)} />
                  </div>
                  <Blurb header='Make it work' paragraph={paragraphs[2]} />
                </div>
              </li>
              <li>
                <img
                  src='/static/how-we-work/three.png'
                  className='mobile-only'
                />
                <div className='blurb-container'>
                  <div className='waypoint'>
                    <Waypoint onEnter={this.setAnimation(3)} />
                  </div>
                  <Blurb
                    header='Devil’s in the details'
                    paragraph={paragraphs[3]}
                  />
                </div>
              </li>
              <li>
                <img
                  src='/static/how-we-work/four.png'
                  className='mobile-only'
                />
                <div className='blurb-container'>
                  <Waypoint
                    onEnter={this.prepareRestartAnimation}
                    topOffset={100}
                  />
                  <div className='waypoint'>
                    <Waypoint onEnter={this.setAnimation(4)} />
                  </div>
                  <Blurb header='Have fun' paragraph={paragraphs[4]} />
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className='form-container'>
          <img
            src='/static/how-we-work/five.png'
            className='mobile-only mobile-end-img'
          />
          <img src='/static/how-we-work/logo.png' className='mobile-only' />
          <ContactForm focused={this.state.animationIndex == 5} />
          <div className='final-waypoint'>
            <Waypoint onEnter={this.setAnimation(5)} bottomOffset={100} />
          </div>
        </div>
        <style jsx>{`
        .intro {
          ${columns(3)}
          margin: auto;
          display: block;
          text-align: center;
          margin-bottom: -190px;
        }
        .mobile-end-img {
          transform: scale(0.95);
          transform-origin: right;
          margin: -90px 0 40px 0;
        }
        .final-waypoint {
          position: relative;
          top: -400px;
        }
        .right {
          position: relative;
        }
        .right:before {
          content: '.';
          color: transparent;
          background: white;
          border-left: 3px solid ${colors.gray6};
          left: -15px;
          transform: translateX(-50%);
          position: absolute;
          height: calc(100% - 240px);
          bottom: 0;
        }
        .mobile-only {
          display: none;
          max-width: 100%;
          margin-bottom: ${margins.m}px;
        }
        .up-arrow {
          position: sticky;
          top: 50%;
          transform: translateY(-50%) rotateZ(180deg);
          display: ${this.state.scrollingUp && this.state.animationIndex >= 1 ? 'block' : 'none'};
          cursor: pointer;
        }
        .waypoint {
          position: relative;
          top: 50vh;
        }
        .bottom-arrow {
          position: fixed;
          bottom: 10px;
          opacity: ${this.canShowIndicator() ? '1' : '0'};
          transform: translateX(-50%);
          transition: opacity ${this.state.scrolling ? '0.2s' : '0.7s'} ease-in;
          z-index: -1;
          transform: scale(0.7);
          display: inline-block;
          margin-left: -50px;
        }
        .bottom-arrow path, .bottom-arrow circle {
          stroke-width: 2.5px;
        }
        .bottom-arrow small {
          ${type.sourceCodeLabelL}
          color: ${colors.blue1};
          letter-spacing: 2px;
          position: absolute;
          margin-left: -10px;
          margin-top: -33px;
        }
        .wrapper {
          ${layout.desktop}
          display: flex;
          align-item: stretch;
        }
        .left {
          width: 50%;
          margin-right: ${gutterSize}px;
          margin-bottom: -100px;
          margin-top: -100px;
          text-align: center;
          padding-top: 25px;
        }
        .right {
          width: 50%;
          margin-bottom: 800px;
        }
        ol {
          ${columns(4)}
        }
        ol li {
          counter-increment: step-counter;
          position: relative;
          left: 10px;
          height: 1300px;
          padding: 200px 0;
        }
        ol li:last-child {
          padding-bottom: 0;
        }
        ol li:first-child {
          padding-top: 0;
        }
        .blurb-container {
          position: sticky;
          transform: translateY(100%);
          top: calc(50vh - 415px);
          height: 300px;
          padding-left: 10px;
        }
        .blurb-container:before {
          content: counter(step-counter);
          position: absolute;
          top: -1px;
          left: -43px;
          ${type.sourceCodeLabelL}
          color: ${colors.blue1};
          width: 22px;
          height: 22px;
          line-height: 22px;
          border: 3px solid ${colors.gray6};
          color: ${colors.blue1};
          border-radius: 100%;
          text-align: center;
          padding: 0 0 3px 3px;
          z-index: 2;
          background: white;
        }
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding-bottom: ${margins.xl}px;
          background: white;
          z-index: 1;
          position: relative;
          top: -10px;
          padding-top: 20px;
        }
        @media screen and (max-width: 750px) {
          .form-container {
            margin: 0 ${margins.l}px;
          }
        }
        @media screen and (max-width: 650px) {
          .left {
            display: none;
          }
          .right {
            margin-bottom: 0;
            width: 100%;
          }
          .right:before {
            display: none;
          }
          .form-container {
            height: auto;
            padding-bottom: ${margins.xl}px;
            display: block;
          }
          .form-container img {
            margin-bottom: ${margins.m}px;
          }
          ol li {
            height: auto !important;
            padding: 0 0 100px 0 !important;
            left: 0 !important;
          }
          .blurb-container {
            position: relative;
            top: 0;
            transform: none;
            height: auto;
          }
          .blurb-container:before {
            position: relative;
            display: inline-block;
            margin: 0;
            left: 0;
            top: 27px;
            border: 0;
            color: black;
            content: counter(step-counter) '.';
            padding: 0;
            background: transparent;
          }
          li h4 {
            padding-left: 35px;
          }
          .mobile-only {
            display: block;
          }
        }
        @media screen and (max-width: 480px) {
          .intro {
            margin-bottom: ${margins.l}px;
          }
          .wrapper {
            ${layout.mobile}
          }
          .form-container {
            margin: 0 ${margins.s}px;
          }
          .blurb-container {
            padding-left: 0;
          }
        }
      `}</style>
      </div>
    )
  }
}
