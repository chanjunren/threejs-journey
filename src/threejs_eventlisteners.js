export default function loadEventListeners(pageState, threeJsComponents) {
  const {camera, renderer, canvas} = threeJsComponents
  const {cursor, perspectiveSize} = pageState
  window.addEventListener('mousemove', (event => {
    cursor.x = event.clientX / perspectiveSize.width - 0.5;
    cursor.y = event.clientY / perspectiveSize.height - 0.5;
  }))

  window.addEventListener('resize', (event => {
    perspectiveSize.width = window.innerWidth,

    perspectiveSize.height = window.innerHeight
    camera.aspect = perspectiveSize.width / perspectiveSize.height
    camera.updateProjectionMatrix()

    renderer.setSize(perspectiveSize.width, perspectiveSize.height)
  }))

  window.addEventListener('dblclick', (event => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      canvas.requestFullscreen()
    }
  }))

}