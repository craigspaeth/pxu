import Nav from '../components/nav'
import Meta from '../components/meta'
import Hero from '../components/hero'
import Header from '../components/header'
import MoreSection from '../components/more-section'
import UISection from '../components/ui-section'
import FullstackSection from '../components/fullstack-section'
import WeveWorkedWith from '../components/weve-worked-with'
import WhoWeAre from '../components/who-we-are'
import HowWeWork from '../components/how-we-work'
import Footer from '../components/footer'
import initHeroViz from '../lib/hero-viz'
import { colors, margins } from '../lib/styles'
import copy from '../lib/copy'
import Waypoint from 'react-waypoint'
import _ from 'lodash'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { navIndex: 0 }
  }

  componentDidMount () {
    const pathname = this.scrollTo(
      {
        '/': 'heroTop',
        '/what-we-do': 'whatWeDo',
        '/who-we-are': 'whoWeAre',
        '/work-with-us': 'workWithUs'
      }[location.pathname]
    )
  }

  scrollTo (section) {
    window.scroll({
      top: this.refs[section].offsetTop - 150,
      left: 0,
      behavior: 'smooth'
    })
  }

  setNavIndex = num => () => {
    const pathname =
      {
        0: '/',
        1: '/what-we-do',
        2: '/who-we-are',
        3: '/work-with-us'
      }[num] || ''
    window.history.pushState(null, document.title, pathname)
    this.setState({ navIndex: num - 1 })
  }

  render () {
    return (
      <div>
        <div ref='heroTop' />
        <Meta />
        <Nav
          scrollTo={this.scrollTo.bind(this)}
          highlightedIndex={this.state.navIndex}
        />
        <Waypoint onEnter={this.setNavIndex(0)} />
        <Hero scrollTo={this.scrollTo.bind(this)} />
        <div ref='whatWeDo'>
          <Waypoint onEnter={this.setNavIndex(1)} />
        </div>
        <Header eyebrow={copy.header1.eyebrow} copy={copy.header1.copy} />
        <UISection />
        <FullstackSection />
        <MoreSection />
        <div className='who-we-are-break' />
        <div ref='whoWeAre'>
          <Waypoint onEnter={this.setNavIndex(2)} />
        </div>
        <Header eyebrow={copy.header2.eyebrow} copy={copy.header1.copy} />
        <WhoWeAre />
        <WeveWorkedWith />
        <HowWeWork />
        <div ref='workWithUs' className='work-with-us'>
          <Waypoint onEnter={this.setNavIndex(3)} />
        </div>
        <Footer scrollTo={this.scrollTo.bind(this)} />
        <style jsx>
          {`
          .who-we-are-break {
            margin-top: ${margins.xxxxl}px;
          }
          .work-with-us {
            top: -680px;
          }
          @media screen and (max-width: 480px) {
            .who-we-are-break {
              margin-top: ${margins.xxl}px;
            }
          }
        `}
        </style>
      </div>
    )
  }
}
