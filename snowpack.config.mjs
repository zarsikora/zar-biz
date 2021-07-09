export default {
  // mount: {
  //   public: '/',
  // },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        /* see "Plugin Options" below */
      },
    ],
  ]
};