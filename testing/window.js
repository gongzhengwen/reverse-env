import { window, top, parent, self } from '../src/index.js'

// ----------------------------------------------------------

/**
 * 代理检测
 */
;(function () {
  console.log(top == window)
  console.log(top == parent)
  console.log(window == this)
  console.log(top.self.window == parent.self.parent)
  console.log(top.self == window)
  console.log(top.self.window == window.top.self)
  console.log(self.window.top.frames == top.window.self)
  console.log(self.window.top.self.frames.parent.top == top.window.self)
  console.log(self.window.top.self.top == top.window.self.window)
}).call(window)
