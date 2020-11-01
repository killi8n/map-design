module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        ['module:metro-react-native-babel-preset'],
        [
          '@babel/preset-env',
          {
            modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
            targets: {
              ie: '11',
            },
          }
        ]
      ],
      plugins: [
          'react-native-web',
          ["module-resolver", {
            "alias": {
              "^react-native$": "react-native-web"
            }
          }]
        ]
    };
  };