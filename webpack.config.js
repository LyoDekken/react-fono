module.exports = {
  // outras configurações
  module: {
    rules: [
      // outras regras
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
