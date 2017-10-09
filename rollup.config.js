const banner = `
/*!
 * NativeScript-MoonJS
 * (c) 2017 rigor789
 * Released under MIT license.
 */
`
export default {
  name: 'NativeScript-MoonJS',
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  sourcemap: true,
  external(id) {
    return id.startsWith('ui/') || id.startsWith('application')
  },
  banner
}