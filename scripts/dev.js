const { build } = require('esbuild');
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

build({
  ...shared,
  outfile: 'dist/index.js',
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build faild', error);
      else console.log('watch build succeeded');
    },
  },
});
