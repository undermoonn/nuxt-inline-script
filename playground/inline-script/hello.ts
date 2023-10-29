;(() => {
  const target: Target = {}
  console.log('hello world', target.a?.b)
})()

interface Target {
  a?: {
    b?: string
  }
}
