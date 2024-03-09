import env from '../src/index.js'
import { document } from '../src/index.js'

// ----------------------------------------------------------

console.log(env)
console.log('-'.repeat(80))

const a = document.createElement('a')
a.href = 'https://www.google.com'

console.log(a.host) // 'www.google.com'
console.log(a.href) // 'www.google.com'

console.log('-'.repeat(80))

console.log(document.createElement + '')
