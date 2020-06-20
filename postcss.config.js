module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      features: {
        stage: 3,
        importFrom: require.resolve('@jetbrains/ring-ui/components/global/variables.css'),
        features: {
          'nesting-rules': true,
          'custom-properties': {preserve: true}
        }
      }
    })
  ]
});
