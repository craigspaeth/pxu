import Nav from '../components/nav'
import Meta from '../components/meta'
import Hero from '../components/hero'
import Header from '../components/header'
import MoreSection from '../components/more-section'
import WeveWorkedWith from '../components/weve-worked-with'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import initHeroViz from '../lib/hero-viz'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Nav />
        <Hero />
        <Header
          eyebrow='What we do'
          copy='We build functional digital products with attention to detail'
        />
        <MoreSection />
        <Header
          eyebrow='Who we are'
          copy='We’re an agile team of design-gineers'
        />
        <WeveWorkedWith />
        <ContactForm />
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
