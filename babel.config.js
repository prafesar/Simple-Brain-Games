module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
    }],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal',
      },
    ],
  ],
};