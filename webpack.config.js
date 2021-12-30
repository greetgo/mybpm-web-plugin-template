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
        './ExamplePagePlugin': './src/app/example-page/example-page.module',
      },
      shared: share({
        '@angular/core': {singleton: true, eager: true, requiredVersion: '^12.0.0'},
        '@angular/common': {singleton: true, eager: true, requiredVersion: '^12.0.0'},
        '@angular/forms': {singleton: true, eager: true, requiredVersion: '^12.0.0'},
        '@angular/router': {singleton: true, eager: true, requiredVersion: '^12.0.0'},
        '@angular/cdk': {singleton: true, eager: true, requiredVersion: '11.2.10'},
        '@angular/material/icon': {singleton: true, eager: true, requiredVersion: '11.2.10'},
        'ng-zorro-antd': {singleton: true, eager: true, requiredVersion: '11.4.0'},
        'ngx-mask': { singleton: true, eager: true, requiredVersion: '^11.1.5' },
        'ngx-infinite-scroll': { singleton: true, eager: true, requiredVersion: '10.0.1' },
        '@ngx-translate/core': { singleton: true, eager: true, requiredVersion: '^13.0.0' },
        '@ngx-translate/http-loader': { singleton: true, eager: true, requiredVersion: '^6.0.0' },
        '@angular/flex-layout': { singleton: true, eager: true, requiredVersion: '12.0.0-beta.34' },

        ...sharedMappings.getDescriptors(),
      })
    }),
  ],
};
