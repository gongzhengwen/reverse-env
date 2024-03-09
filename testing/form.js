import { window, document } from '../src/index.js'

// ----------------------------------------------------------

const form = document.createElement('form')
form.id = '__yrxform__'
form.action = 'https://yuanrenxue.com'
document.body.appendChild(form)
if (window['__yrxform__'] !== form) {
  console.log('你被检测了1')
}

if (!('__yrxform__' in window) || window.hasOwnProperty('__yrxform__')) {
  console.log('你被检测了2')
}
if (!delete window['__yrxform__']) {
  console.log('你被检测了3')
}
if (window['__yrxform__'] !== form) {
  console.log('你被检测了4')
}
if (Object.getOwnPropertyDescriptor(window, '__yrxform__')) {
  console.log('你被检测了5')
}
window['__yrxform__'] = 1
if (window['__yrxform__'] === form) {
  console.log('你被检测了6')
}
if (!Object.getOwnPropertyDescriptor(window, '__yrxform__')) {
  console.log('你被检测了7')
}
delete window['__yrxform__']
if (window['__yrxform__'] !== form) {
  console.log('你被检测了8')
}

console.log(111)
