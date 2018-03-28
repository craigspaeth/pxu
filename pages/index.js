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
import Waypoint from 'react-waypoint'
import Router from 'next/router'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { navIndex: 0 }
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
        0: '/what-we-do',
        1: '/who-we-are',
        2: '/work-with-us'
      }[num] || ''
    Router.push({ pathname })
    this.setState({ navIndex: num })
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
        <Waypoint onEnter={this.setNavIndex(-1)} />
        <Hero scrollTo={this.scrollTo.bind(this)} />
        <div ref='whatWeDo'>
          <Waypoint onEnter={this.setNavIndex(0)} />
        </div>
        <Header
          eyebrow='What we do'
          copy='We build functional digital products with attention to detail'
        />
        <UISection />
        <FullstackSection />
        <MoreSection />
        <div className='who-we-are-break' />
        <div ref='whoWeAre'>
          <Waypoint onEnter={this.setNavIndex(1)} />
        </div>
        <Header
          eyebrow='Who we are'
          copy='We’re an agile team of design-gineers'
        />
        <WhoWeAre />
        <WeveWorkedWith />
        <HowWeWork />
        <div ref='workWithUs'>
          <Waypoint onEnter={this.setNavIndex(2)} />
        </div>
        <Footer scrollTo={this.scrollTo.bind(this)} />
        <style jsx>
          {`
          .who-we-are-break {
            margin-top: ${margins.xxxxl}px;
          }
        `}
        </style>
      </div>
    )
  }
}
