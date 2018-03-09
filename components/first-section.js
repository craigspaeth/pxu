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
        eyebrow='What we do'
        copy='We build functional digital products with attention to detail'
      />
      <style jsx>{`
      ${layout('.wrapper')}
      `}</style>
    </div>
  )
}
