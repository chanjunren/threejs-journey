import {CURSOR, OBJECTS_DISTANCE, PERSPECTIVE_SIZE} from "./page_state.js";

export default function initEventListeners(threeJsComponents) {
  const {camera, renderer, canvas} = threeJsComponents

  window.addEventListener('mousemove', (event => {
    CURSOR.x = event.clientX / PERSPECTIVE_SIZE.width - 0.5;
    CURSOR.y = event.clientY / PERSPECTIVE_SIZE.height - 0.5;
    // console.log("NEW_CURSOR", CURSOR)
  }))

  window.addEventListener('resize', (event => {
    PERSPECTIVE_SIZE.width = window.innerWidth,

    PERSPECTIVE_SIZE.height = window.innerHeight
    camera.aspect = PERSPECTIVE_SIZE.width / PERSPECTIVE_SIZE.height
    camera.updateProjectionMatrix()

    renderer.setSize(PERSPECTIVE_SIZE.width, PERSPECTIVE_SIZE.height)
  }))

  // window.addEventListener('dblclick', (event => {
  //   if (document.fullscreenElement) {
  //     document.exitFullscreen()
  //   } else {
  //     canvas.requestFullscreen()
  //   }
  // }))

  window.addEventListener('scroll', (event => {
    console.log("SCROLL_Y", window.scrollY)
    console.log("CAMERA_Y", camera.position.y)
    console.log(PERSPECTIVE_SIZE.height, OBJECTS_DISTANCE)
    camera.position.y = -window.scrollY * OBJECTS_DISTANCE / PERSPECTIVE_SIZE.height;
  }))

}