type ObjectWithPath = {
  [key: string]: any;
}


export default function dotpath (str:string, obj:ObjectWithPath) {
  const parts = str.split('.')
  const len = parts.length

  return function parse (obj:ObjectWithPath, i:number) {
    let testKey

    for (let i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = obj[testKey]
    }

    return obj
  }
}
