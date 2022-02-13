type ObjectWithPath = {
  [key: string]: any;
}


export default function dotpath(str: string) {
  const parts = str.split(".");
  const len = parts.length;

  return function parse(obj: ObjectWithPath): ObjectWithPath | undefined {
    // Could be a key in an object
    // or an index in an array
    let testKey: string | number;

    for (let i = 0; i < len; ++i) {
      testKey = parts[i];

      if (!obj) return;

      obj = obj[testKey];
    }

    return obj;
  };
}
