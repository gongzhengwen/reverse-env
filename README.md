# reverse-env

Node.js 补环境框架

## 安装

```
npm install reverse-env --save
```

## 案例

```javascript
import { window, document } from "reverse-env";

console.log(window)
console.log(document)
console.log(window.document === document)
```

更多案例可以查看 **testing** 目录。
