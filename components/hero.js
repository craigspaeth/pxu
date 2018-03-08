import initHeroViz from '../lib/hero-viz'
import { type } from '../lib/styles'

export default () => {
  return (
    <div>
      <h3>Pixel Unicorns</h3>
      <h1>Design & dev. studio based in NYC </h1>
      <h2>
        We’re a software design and development studio that builds web and mobile products for our clients.
      </h2>
      <style jsx>{`
      div {
        background-color: #eee;
        height: 90vh;
      }
      h1 {
        ${type.nimbusM}
        font-weight: bold;
      }
      h2 {
        ${type.nimbusM}
        font-weight: bold;
      }

    `}</style>
    </div>
  )
}
