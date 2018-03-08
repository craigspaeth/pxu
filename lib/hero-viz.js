import * as THREE from 'three'

export default () => {
  window.THREE = THREE
  // require('./physi')
  // const { Physijs } = window

  // Scene
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  )
  camera.position.z = 1
  const scene = new THREE.Scene()

  // Object
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
  const geo = new THREE.EdgesGeometry(geometry)
  const mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
  const wireframe = new THREE.LineSegments(geo, mat)
  // const box = new Physijs.BoxMesh(wireframe, mat)
  scene.add(wireframe)

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  const animate = () => {
    requestAnimationFrame(animate)
    wireframe.rotation.x += 0.01
    wireframe.rotation.y += 0.02
    renderer.render(scene, camera)
  }
  animate()
}
