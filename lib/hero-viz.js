import * as THREE from 'three'
import _ from 'lodash'

let renderer, assumePosition

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

  // Resize on window resize
  window.addEventListener(
    'resize',
    _.debounce(() => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }, 200),
    false
  )

  const mover = geo => {
    let xdir = _.sample([-1, 1])
    let ydir = _.sample([-1, 1])
    let zdir = _.sample([-1, 1])
    const speed = 0.0005
    const rotationSpeed = 0.005
    const xrotation = _.random(-rotationSpeed, rotationSpeed)
    const yrotation = _.random(-rotationSpeed, rotationSpeed)
    return () => {
      if (assumePosition) {
      } else {
        const boundingSphere = geo.children[0].geometry.boundingSphere
        const rad = (boundingSphere && boundingSphere.radius) || 0
        if (geo.position.x + rad >= 1 || geo.position.x - rad <= -1) {
          xdir = xdir * -1
        }
        if (geo.position.y + rad >= 1 || geo.position.y - (rad + 0.45) <= -1) {
          ydir = ydir * -1
        }
        if (geo.position.z + rad >= 0.5 || geo.position.z <= -0.5) {
          zdir = zdir * -1
        }
        geo.rotation.x += xrotation
        geo.rotation.y += yrotation
        geo.position.x += speed * xdir
        geo.position.y += speed * ydir
        geo.position.z += speed * zdir
      }
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
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  el.appendChild(renderer.domElement)
  const render = () => {
    objs.forEach(obj => obj.move())
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  callback()
}

const createGeo = type => {
  // Create geometry
  const geo = {
    bigbox: new THREE.BoxGeometry(0.5, 0.5, 0.5),
    smallbox: new THREE.BoxGeometry(0.14, 0.14, 0.14),
    sphere: new THREE.SphereGeometry(0.125, 30, 30),
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

  // Set color
  const color = {
    bigbox: 0xea4235,
    smallbox: 0xea4235,
    sphere: 0x3232fa,
    halfsphere: 0x04de99,
    horn: 0xfcf115
  }[type]
  const mat = new THREE.MeshPhongMaterial({
    color,
    specular: color,
    emissive: color,
    opacity: 0.9,
    transparent: true
  })
  const mesh = new THREE.Mesh(geo, mat)

  // Add outline geometry
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    opacity: 0.4,
    transparent: true
  })
  const outlineMesh = new THREE.Mesh(geo, outlineMaterial)
  outlineMesh.scale.multiplyScalar(1.05)

  // Group and randomly place
  const group = new THREE.Group()
  group.add(mesh)
  // group.add(outlineMesh)
  group.position.x = _.random(-0.5, 0.5)
  group.position.y = _.random(-0.5, 0.5)
  group.rotation.x = _.random(-0.5, 0.5)
  group.rotation.y = _.random(-0.5, 0.5)

  // Set initial position
  const { x, y, z, scale } = {
    bigbox: { x: 0, y: 0, z: -0.25, scale: 1 },
    smallbox: { x: 0.05, y: -0.1, z: 0.18, scale: 0.65 },
    sphere: { x: 0.045, y: -0.029, z: 0.2, scale: 0.60 },
    halfsphere: { x: 0, y: 0.005, z: 0.15, scale: 0.63 },
    horn: { x: 0, y: 0.005, z: 0.01, scale: 0.77 }
  }[type]
  // group.position.x = x
  // group.position.y = y
  // group.position.z = z
  // group.scale.multiplyScalar(scale)

  // Add to scene
  return group
}
