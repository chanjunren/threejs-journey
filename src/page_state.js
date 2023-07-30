export default function loadPageState() {
  const perspectiveSize = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const aspectRatio = perspectiveSize.width / perspectiveSize.height

  const cursor = {
    x: 0, y: 0
  }

  return {
    perspectiveSize,
    cursor,
    aspectRatio
  }
}