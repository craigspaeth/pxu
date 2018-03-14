import {
  columns,
  layout,
  columnList,
  colors,
  type,
  margins,
  gutterSize
} from '../lib/styles'
import Blurb from './blurb'
import ContactForm from '../components/contact-form'
import Arrow from '../components/arrow'
import Waypoint from 'react-waypoint'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { animationIndex: 0 }
  }

  setAnimation = i => () => {
    this.setState({ animationIndex: i })
  }

  render () {
    return (
      <div className='wrapper'>
        <Waypoint onLeave={this.setAnimation(0)} />
        <div className='left'>
          <Arrow />
          <div className='animation-container'>
            <div className='half-circle' />
            <div className='box' />
            <div className='circle' />
            <div className='horn' />
            <div className='box-two' />
          </div>
        </div>
        <div className='right'>
          <div className='intro'>
            <Blurb
              icon='/static/muscle.svg'
              header='How we work'
              paragraph='In our projects we follow a core set of values and process that guide us. Let’s take a look.'
            />
          </div>
          <ol>
            <li>
              <Waypoint onEnter={this.setAnimation(1)} />
              <div>
                <Blurb
                  header='First—the fundamentals'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
            <li>
              <Waypoint onEnter={this.setAnimation(2)} />
              <div>
                <Blurb
                  header='Make it work'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
            <li>
              <Waypoint onEnter={this.setAnimation(3)} />
              <div>
                <Blurb
                  header='Devil’s in the details'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
            <li>
              <Waypoint onEnter={this.setAnimation(4)} />
              <div>
                <Blurb
                  header='Have fun'
                  paragraph='Before any project we must prime our canvas by clearing out all the details and distractions. It’s with this blank slate and clarity that we can try to find our north star—what is the primary goal, business metric, or brand message this project is trying to achieve?'
                />
              </div>
            </li>
          </ol>
          <ContactForm />
        </div>
        <style jsx>{`
        .wrapper {
          ${layout.desktop}
          display: flex;
        }
        .left {
          ${columns(5)}
          width: 100%;
          height: 100px;
          margin-right: ${gutterSize}px;
          text-align: center;
          padding-top: 25px;
        }
        .right {
          ${columns(4)}
        }
        .animation-container {
          background: #f2f2f2;
          height: 50vh;
          width: inherit;
          top: calc(50% - 25vh);
          max-width: inherit;
          z-index: -1;
          position: ${this.state.animationIndex > 0 ? 'fixed' : 'relative'};
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .animation-container div {
          width: 100px;
          height: 100px;
          min-height: 10px;
          border: 3px solid ${colors.gray3};
        }
        ${{ 0: `
          .animation-container .box {
            border-color: blue !important;
          }
          `,
          1: `
          .animation-container .box {
            border-color: blue !important;
          }
          `,
          2: `
          .animation-container .circle {
            border-color: blue !important;
          }
          `,
          3: `
          .animation-container .horn {
            border-color: blue !important;
          }
          `,
          4: `
          .animation-container .box-two, .animation-container .half-circle {
            border-color: blue !important;
          }
          ` }[this.state.animationIndex]}
        ol li {
          height: 100vh;
          display: flex;
          align-items: center;
          counter-increment: step-counter;
        }
        ol li div {
          position: relative;
        }
        ol li div:before {
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
