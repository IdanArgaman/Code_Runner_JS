module.exports = {
  presets: [['@vue/cli-plugin-babel/preset', {
    "targets": {
      "chrome": "58"
    },
    "exclude": ["@babel/plugin-transform-typeof-symbol"]
  }]]
};