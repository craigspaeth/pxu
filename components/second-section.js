import initHeroViz from '../lib/hero-viz'
import Header from './header'
import {
  type,
  margins,
  columns,
  layout,
  navHeight,
  colors
} from '../lib/styles'

export default () => {
  return (
    <div className='wrapper'>
      <Header
        eyebrow='Who we are'
        copy='We’re an agile team of design-gineers'
      />
      <style jsx>{`
      ${layout('.wrapper')}
      `}</style>
    </div>
  )
}
