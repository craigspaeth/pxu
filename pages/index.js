import Header from '../components/header'
import Meta from '../components/meta'
import Hero from '../components/hero'
import initHeroViz from '../lib/hero-viz'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Header />
        <Hero />
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
