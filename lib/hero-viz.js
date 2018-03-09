import * as THREE from 'three'
import _ from 'lodash'

let renderer

export default (el, callback) => {
  if (renderer) renderer.domElement.remove()

  // Scene
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  )
  camera.position.z = 1
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  const mover = geo => {
    let xdir = _.sample([-1, 1])
    let ydir = _.sample([-1, 1])
    const speed = 0.0002
    const xrotation = _.random(-0.001, 0.001)
    const yrotation = _.random(-0.001, 0.001)
    return () => {
      const rad = geo.geometry.boundingSphere.radius
      if (geo.position.x + rad >= 1 || geo.position.x - rad <= -1) {
        xdir = xdir * -1
      }
      if (geo.position.y + rad >= 1 || geo.position.y - (rad + 0.45) <= -1) {
        ydir = ydir * -1
      }
      geo.rotation.x += xrotation
      geo.rotation.y += yrotation
      geo.position.x += speed * xdir
      geo.position.y += speed * ydir
    }
  }

  // New object
  const obj = type => {
    const geo = createGeo(type)
    scene.add(geo)
    return { geo, move: mover(geo) }
  }

  // Add objs
  const objs = [
    obj('sphere'),
    obj('bigbox'),
    obj('smallbox'),
    obj('halfsphere'),
    obj('horn')
  ]

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  el.appendChild(renderer.domElement)
  let startBreakApart = false
  setTimeout(() => (startBreakApart = true), 2000)
  const render = () => {
    if (startBreakApart) objs.forEach(obj => obj.move())
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  callback()
}

const createGeo = type => {
  // Create wireframe geometry
  const geometry = {
    bigbox: new THREE.BoxGeometry(0.5, 0.5, 0.5),
    smallbox: new THREE.BoxGeometry(0.14, 0.14, 0.14),
    sphere: new THREE.SphereGeometry(0.125, 7, 7),
    halfsphere: (() => {
      const shape = new THREE.Shape()
      shape.moveTo(0.07, -0.33) // top
      shape.lineTo(0.07, -0.33) // bottom
      shape.lineTo(-0.33, -0.33) // bottom left
      shape.bezierCurveTo(-0.33, 0.07, 0.07, 0.07, 0.07, 0.07)
      const extrudeSettings = {
        amount: -0.25,
        bevelEnabled: false
      }
      return new THREE.ExtrudeGeometry(shape, extrudeSettings)
    })(),
    horn: (() => {
      const shape = new THREE.Shape()
      shape.moveTo(0.07, 0.07) // top
      shape.lineTo(0.33, 0.07) // right
      shape.lineTo(0.07, -0.03) // bottom
      const extrudeSettings = {
        amount: -0.05,
        bevelEnabled: false
      }
      return new THREE.ExtrudeGeometry(shape, extrudeSettings)
    })()
  }[type]
  const color = {
    bigbox: 0x3232fa,
    smallbox: 0x42e896,
    sphere: 0x42e896,
    halfsphere: 0x42e896,
    horn: 0xeffa13
  }[type]
  const geo = new THREE.EdgesGeometry(geometry)
  const mat = new THREE.LineBasicMaterial({ color })
  const wireframe = new THREE.LineSegments(geo, mat)

  // Set initial position
  const [x, y] = {
    bigbox: [0.38, 0],
    smallbox: [0.58, -0.17],
    sphere: [0.578, -0.05],
    halfsphere: [0.5, 0],
    horn: [0.5, 0]
  }[type]
  wireframe.position.x = x
  wireframe.position.y = y

  // Add to scene
  return wireframe
}
