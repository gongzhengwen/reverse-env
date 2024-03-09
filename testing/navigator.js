import { navigator } from '../src/index.js'

// ----------------------------------------------------------

/**
 * 1. navigator.plugins 是一个类数组对象,是PluginArray的实例
 * 2. navigator.plugins[0] 是一个类数组对象,是Plugin的实例
 * 3. 取Plugin下的属性的时候,每次取到的属性都是新的(也就是,每次取都new 了一下),结果是MimeType的实例
 * 4. MimeType的实例下面有一个enabledPlugin属性,指向了它的"祖宗" Plugin
 */

var dd = navigator.plugins[0]

console.log(dd[0] == dd[0])
console.log(navigator.plugins[0][0] == navigator.plugins[0][0])
console.log(dd[0].enabledPlugin[0] == dd[0])
console.log(navigator.plugins[0][0].enabledPlugin == dd)
console.log(navigator.plugins[0][0].enabledPlugin == dd[1].enabledPlugin)
