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
import _ from 'lodash'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      animationIndex: 0,
      locked: false,
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

  setAnimation = i => (e, dir) => {
    this.setState({ scrollingUp: e.previousPosition == 'above' })
    if (i == 5) {
      this.setState({ animationIndex: 5 })
      setTimeout(() => {
        this.setState({ animationIndex: 6 })
        setTimeout(() => this.setState({ animationIndex: 7 }), 50)
      }, 50)
    } else {
      this.setState({ animationIndex: i })
    }
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='left'>
          <Arrow />
          <div className='bottom-arrow'>
            <small>Scroll</small>
            <Arrow />
          </div>
          <div className='up-arrow'>
            <Arrow />
          </div>
          <div className='animation-container'>
            <div className='indicator' />
            <div className='half-circle'>
              <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M98.5 1.511C45.29 2.306 2.306 45.291 1.511 98.5H98.5V1.511z'
                  stroke={colors.gray3}
                  stroke-width='3'
                  fill='none'
                  fill-rule='evenodd'
                />
              </svg>
            </div>
            <div className='box' />
            <div className='circle' />
            <div className='horn'>
              <svg width='133' height='60' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1.5 1.5v47.318L124.899 1.5H1.5z'
                  stroke={colors.gray3}
                  stroke-width='3'
                  fill='none'
                  fill-rule='evenodd'
                />
              </svg>
            </div>
            <div className='box-two' />
          </div>
        </div>
        <div className='right'>
          <div className='intro'>
            <Waypoint onEnter={this.setAnimation(0)} />
            <Blurb
              icon='/static/muscle.svg'
              header='How we work'
              paragraph='In our projects we follow a core set of values and process that guide us. Let’s take a look.'
            />
          </div>
          <ol>
            <li>
              <div>
                <div className='waypoint'>
                  <Waypoint onEnter={this.setAnimation(1)} />
                </div>
                <Blurb
                  header='First—the fundamentals'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
            <li>
              <div>
                <div className='waypoint'>
                  <Waypoint onEnter={this.setAnimation(2)} />
                </div>
                <Blurb
                  header='Make it work'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
            <li>
              <div>
                <div className='waypoint'>
                  <Waypoint onEnter={this.setAnimation(3)} />
                </div>
                <Blurb
                  header='Devil’s in the details'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
            <li>
              <div>
                <div className='waypoint'>
                  <Waypoint onEnter={this.setAnimation(4)} />
                </div>
                <Blurb
                  header='Have fun'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
          </ol>
          <div className='form-container'>
            <Waypoint onEnter={this.setAnimation(5)} />
            <ContactForm focused={this.state.animationIndex == 6} />
          </div>
        </div>
        <style jsx global>
          {`
          body {
            overflow: ${this.state.locked ? 'hidden' : 'inherit'};
          }
          @keyframes hornbounce {
            0% {
              transform: scaleX(0.05);
            }
            50% {
              transform: scaleX(1.2);
            }
            100% {
              transform: scaleX(1);
            }
          }
          @keyframes half-circle-wiggle {
            10%, 80% {
              transform: translateX(-280px) rotateZ(-5deg);
            }
            20%, 70% {
              transform: translateX(-280px) rotateZ(10deg);
            }
            20%, 40%, 60% {
              transform: translateX(-280px) rotateZ(-20deg);
            }
            30%, 50% {
              transform: translateX(-280px) rotateZ(20deg);
            }
            90%, 100% {
              transform: translateX(-280px) rotateZ(0deg);
            }
          }
          @keyframes box-wiggle {
            10%, 80% {
              transform: translateX(-140px) rotateZ(4deg);
            }
            20%, 70% {
              transform: translateX(-140px) rotateZ(-11deg);
            }
            20%, 40%, 60% {
              transform: translateX(-140px) rotateZ(22deg);
            }
            30%, 50% {
              transform: translateX(-140px) rotateZ(-19deg);
            }
            90%, 100% {
              transform: translateX(-140px) rotateZ(0deg);
            }
          }
          @keyframes circle-wiggle {
            10%, 80% {
              transform: translateY(-5px);
            }
            20%, 70% {
              transform: translateY(10px);
            }
            20%, 40%, 60% {
              transform: translateY(-20px);
            }
            30%, 50% {
              transform: translateY(20px);
            }
            90%, 100% {
              transform: translateY(0px);
            }
          }
          @keyframes horn-wiggle {
            0%, 100% {
              transform-origin: 0% 0%;
            }
            10%, 80% {
              transform: translateX(140px) rotateZ(-2deg);
            }
            20%, 70% {
              transform: translateX(140px) rotateZ(5deg);
            }
            20%, 40%, 60% {
              transform: translateX(140px) rotateZ(-7deg);
            }
            30%, 50% {
              transform: translateX(140px) rotateZ(6deg);
            }
            90%, 100% {
              transform: translateX(140px) rotateZ(0deg);
            }
          }
          @keyframes box-two-wiggle {
            10%, 80% {
              transform: translateX(300px) translateY(3px) rotateZ(2deg);
            }
            20%, 70% {
              transform: translateX(300px) translateY(15px) rotateZ(-5deg);
            }
            20%, 40%, 60% {
              transform: translateX(300px) translateY(0px) rotateZ(2deg);
            }
            30%, 50% {
              transform: translateX(300px) translateY(25px) rotateZ(-7deg);
            }
            90%, 100% {
              transform: translateX(300px) translateY(0px) rotateZ(0deg);
            }
          }
          @keyframes rotate-around {
            0% {
              transform: scale(0.7) rotate(0deg);
            }
            100% {
              transform: scale(0.7) rotate(360deg);
            }
          }
          `}
        </style>
        <style jsx>{`
        .up-arrow {
          position: sticky;
          top: 50%;
          transform: translateY(-50%) rotateZ(180deg);
          display: ${this.state.scrollingUp && this.state.animationIndex >= 1 ? 'block' : 'none'}
        }
        .waypoint {
          position: relative;
          top: 50vh;
        }
        .bottom-arrow {
          position: fixed;
          bottom: 10px;
          opacity: ${!this.state.scrolling && this.state.animationIndex > 0 && this.state.animationIndex <= 5 ? '1' : '0'};
          transform: translateX(-50%);
          transition: opacity ${this.state.scrolling ? '0.2s' : '0.7s'} ease-in;
          z-index: -1;
          transform: scale(0.7);
          display: inline-block;
          margin-left: -49px;
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
          ${columns(5)}
          width: 100%;
          margin-right: ${gutterSize}px;
          text-align: center;
          padding-top: 25px;
        }
        .right {
          ${columns(4)}
        }
        .animation-container {
          height: 500px;
          width: inherit;
          top: calc(50% - 250px);
          max-width: inherit;
          z-index: -1;
          position: fixed;
          justify-content: space-evenly;
          align-items: center;
          transition: opacity 0.3s, transform 0.5s ease-in-out;
          transform: translate3d(0, 0, 0);
          display: ${this.state.scrollingUp ? 'none' : 'flex'};
        }
        .animation-container .half-circle,
        .animation-container .box,
        .animation-container .circle,
        .animation-container .horn,
        .animation-container .box-two {
          width: 100px;
          height: 100px;
          border: 3px solid ${colors.gray3};
          position: absolute;
          opacity: 0;
        }
        .animation-container .circle {
          transition:
            transform 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) 0.7s,
            border-radius 1s  cubic-bezier(0.645, 0.045, 0.355, 1.000) 0.7s;
          transform: rotateZ(0deg);
        }
        .animation-container .box {
          transition: opacity 0.3s ease-in, transform 1s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }
        .animation-container .horn {
          transition: transform 0.3s cubic-bezier(0.860, 0.000, 0.070, 1.000), opacity 0.3s ease-in;
          transform: translateX(80px);
          border: 0;
        }
        .animation-container .horn svg {
          content: '.';
          opacity: 0;
          color: transparent;
          display: block;
          transform: scaleX(0.05);
          transform-origin: 0% 0%;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s, opacity 0.3 ease-in;
        }
        .animation-container .half-circle {
          border: 0;
        }
        .animation-container .half-circle {
          opacity: 0;
          transform: translateX(-100vw);
          transition: transform 0.7s cubic-bezier(0.860, 0.000, 0.070, 1.000), opacity 0.3s ease-in-out;
        }
        .animation-container .box-two {
          opacity: 0;
          transform: translateX(100vw);
          transition: transform 0.7s cubic-bezier(0.860, 0.000, 0.070, 1.000), opacity 0.3s ease-in-out;
        }
        .form-container {
          height: calc(100vh - (${footerHeight + navHeight}px));
          min-height: 650px;
          display: flex;
          align-items: center;
        }
        ${(() => {
          const step2 = `
            .animation-container .circle {
              opacity: 1 !important;
              transform: rotateZ(720deg) !important;
              border-radius: 100%;
            }
            .animation-container .box {
              opacity: 1 !important;
              transform: translateX(-140px);
            }
          `
          const step3 = `
            ${step2}
            .animation-container .horn {
              opacity: 1 !important;
              transform: translateX(140px) !important;
            }
            .animation-container .horn svg {
              transform: scaleX(1) !important;
              opacity: 1 !important;
              animation: hornbounce 0.5s ease-in-out forwards;
            }
          `
          const step4 = `
            ${step3}
            .animation-container .half-circle {
              opacity: 1 !important;
              transform: translateX(-280px) !important;
            }
            .animation-container .box-two {
              transform: translateX(300px) !important;
              opacity: 1 !important;
            }
            .animation-container {
              transform: scale(0.7) translateX(-50px) !important;
            }
            .animation-container .half-circle * {
              stroke: ${colors.fushia1};
            }
            .animation-container .half-circle {
              animation: half-circle-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
            }
            .animation-container .box {
              animation: box-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
            }
            .animation-container .circle {
              animation: circle-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
            }
            .animation-container .horn {
              animation: horn-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
            }
            .animation-container .box-two {
              animation: box-two-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
            }
            .animation-container .box {
              border-color: ${colors.blue1} !important;
            }
            .animation-container .circle {
              border-color: ${colors.green1} !important;
            }
            .animation-container .horn * {
              stroke: ${colors.fushia1};
            }
            .animation-container .box-two {
              border-color: ${colors.green1} !important;
            }
          `
          const step5 = `
            ${step4}
            .animation-container .half-circle,
            .animation-container .box,
            .animation-container .circle,
            .animation-container .horn,
            .animation-container .box-two {
              opacity: 1 !important;
              animation-play-state: paused !important;
              transition: all 0.5s  cubic-bezier(0.645, 0.045, 0.355, 1.000) !important;
            }
          `
          const step6 = `
            ${step5}
            .animation-container .half-circle,
            .animation-container .box,
            .animation-container .circle,
            .animation-container .horn,
            .animation-container .box-two {
              animation-name: none;
            }
            .animation-container {
              animation: rotate-around 0.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
            }
            `
          return { 0: `
              .animation-container {
                opacity: 0;
                transition: opacity 0.1s ease-out !important;
              }
            `,
            1: `
              .animation-container .box {
                opacity: 1 !important;
              }
            `,
            2: step2,
            3: step3,
            4: step4,
            5: step5,
            6: step6,
            7: `
              ${step6}
              .animation-container .half-circle path,
              .animation-container .box,
              .animation-container .circle,
              .animation-container .horn path,
              .animation-container .box-two {
                border-color: ${colors.gray3} !important;
                stroke: ${colors.gray3} !important;
              }
              .animation-container .half-circle path {
                stroke-width: 5px;
              }
              .animation-container .horn path {
                stroke-width: 9px;
              }
              .animation-container .half-circle {
                transform: scale(1.79) translate(-33px, 33.5px) !important;
              }
              .animation-container .circle {
                transform: scale(1.1) translate(24px, 24px) !important;
                border-width: 7px !important;
              }
              .animation-container .horn {
                transform: scale(0.95) translate(74px, 18px) !important;
              }
              .animation-container .horn svg {
                border-top: 5px solid ${colors.gray3} !important;
                border-left: 3px solid ${colors.gray3} !important;
              }
              .animation-container .box-two {
                transform: scale(0.75) translate(48px, 107px) !important;
                border-width: 10px !important;
              }
              .animation-container .box {
                transform: translateX(0px) rotateZ(0deg) scale(3) !important;
              }
            ` }[this.state.animationIndex]
        })()}
        ol {
          margin-bottom: 50vh;
        }
        ol li {
          height: 1200px;
          counter-increment: step-counter;
          padding: 200px 0;
        }
        ol li div:not(.waypoint) {
          position: sticky;
          top: 50vh;
          transform: translateY(-50%);
        }
        ol li div:not(.waypoint):before {
          content: counter(step-counter) '.';
          position: absolute;
          top: -1px;
          left: -41px;
          ${type.sourceCodeLabelL}
          font-size: 26px;
          color: ${colors.blue1};
        }
        .intro {
          min-height: 50vh;
        }
        @media screen and (max-width: 480px) {
          .wrapper {
            ${layout.mobile}
          }
        }
      `}</style>
      </div>
    )
  }
}
