import initHeroViz from '../lib/hero-viz'

export default class extends React.Component {
  componentDidMount () {
    initHeroViz()
  }

  render () {
    return (
      <div>
        Hello World
      </div>
    )
  }
}
