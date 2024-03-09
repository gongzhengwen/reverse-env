export function protoExtend(subClass, superClass) {
  const proto = Object.create(superClass.prototype)
  proto.constructor = subClass
  subClass.prototype = proto
}
