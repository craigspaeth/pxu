import Nav from '../components/nav'
import Meta from '../components/meta'
import Hero from '../components/hero'
import FirstSection from '../components/first-section'
import SecondSection from '../components/second-section'
import Footer from '../components/footer'
import initHeroViz from '../lib/hero-viz'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Nav />
        <Hero />
        <FirstSection />
        <SecondSection />
        <Footer />
        <style jsx>
          {`
            div {
              height: 1000px;
            }
          `}
        </style>
      </div>
    )
  }
}
