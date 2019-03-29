module.exports = function babelConfig(api) {
  api.cache.using(() => process.env.NODE_ENV === 'development');

  const presets = [
    '@babel/preset-env'
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
