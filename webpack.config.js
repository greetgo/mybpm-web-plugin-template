const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, './tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'plugins'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plugins',
      library: {type: 'var', name: 'plugins'},
      filename: 'plugin.js',
      exposes: {
        './MenuItemPlugin': './src/app/menu-item.component.ts',
      },
      shared: share({
        ...sharedMappings.getDescriptors(),
        '@angular/core': {
          singleton: true,
        },
        '@angular/common': {
          singleton: true,
        },
        '@angular/forms': {
          singleton: true,
        },
        '@angular/router': {
          singleton: true,
        },
      })
    }),
    sharedMappings.getPlugin()
  ],
};
