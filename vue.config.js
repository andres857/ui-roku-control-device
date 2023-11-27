module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://3.129.105.109:8081',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };
  