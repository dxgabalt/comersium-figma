const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig();
  // Exclude svg from assetExts and add to sourceExts
  config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];
  config.transformer = {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  return config;
})();