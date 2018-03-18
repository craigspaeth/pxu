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

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Nav />
        <div className='gray-bg'>
          <Hero />
          <Header
            eyebrow='What we do'
            copy='We build functional digital products with attention to detail'
          />
          <UISection />
        </div>
        <FullstackSection />
        <MoreSection />
        <Header
          eyebrow='Who we are'
          copy='We’re an agile team of design-gineers'
        />
        <WhoWeAre />
        <WeveWorkedWith />
        <HowWeWork />
        <Footer />
        <style jsx>{`
        .gray-bg {
          background: ${colors.gray7};
          padding-bottom: ${margins.xxl}px;
        }
        `}</style>
      </div>
    )
  }
}
