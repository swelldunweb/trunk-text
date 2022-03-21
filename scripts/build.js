const { build } = require('esbuild');
const { Generator } = require('npm-dts');
const { dependencies, peerDependencies } = require('../package.json');

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  external: dependencies
    ? Object.keys(dependencies).concat(
        peerDependencies ? Object.keys(peerDependencies) : []
      )
    : [],
};

new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate();

build({
  ...shared,
  outfile: 'dist/index.js',
});

build({
  ...shared,
  outfile: 'dist/index.esm.js',
  format: 'esm',
});
