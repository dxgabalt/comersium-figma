const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Añade 'svg' a los assetExts para que Metro sepa cómo tratarlos como activos
config.resolver.assetExts.push('svg');

// Filtra 'svg' de los sourceExts para evitar que Metro intente procesarlos como código JS
// ESTA LÍNEA ES CRUCIAL PARA QUE EL TRANSFORMER DE SVG FUNCIONE CORRECTAMENTE.
config.resolver.sourceExts = config.resolver.sourceExts.filter(ext => ext !== 'svg');

// Usa el transformador de Babel para los archivos SVG
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;