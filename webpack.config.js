const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'plugins'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plugins',
      library: {type: 'var', name: 'plugins'},
      filename: 'plugin.js',
      exposes: {
        './MenuItemPlugin': './src/app/menu-item.component.ts',
      },
    })
  ]
};
