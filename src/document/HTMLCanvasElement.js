HTMLCanvasElement.__uid__ = '__reverse_html_canvas_element__'

function getContext(contextType) {
  if (contextType === '2d') {
    return {}
  } else if (contextType === 'webgl') {
    return {}
  } else if (contextType === 'webgl2') {
    return {}
  } else {
    return null
  }
}

function HTMLCanvasElement() {}

HTMLCanvasElement.prototype.getContext = getContext

export default HTMLCanvasElement
