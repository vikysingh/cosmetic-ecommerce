//This file is created to handle ES6 modules for Jest

module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-proposal-class-properties"]
  };