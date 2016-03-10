module.exports = {
  context: __dirname + '/tmp',
  entry: './ng_component_router.js',
  output: {
    path: __dirname + '/dist',
    pathInfo: true,
    filename: 'router.js'
  },
  resolve: {
    root: __dirname + '/shims',
  }
};