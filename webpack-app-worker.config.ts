const WORKER_APP_CONFIG = {
  target: 'webworker',
  entry: './app/boot_worker_app',
   output: {
    path: __dirname + "/.build/app",
    filename: "worker_app_bundle.js"
  },
  /*get plugins() {
    return [
      VENDOR_DLL_REFERENCE_PLUGIN,
      DEFINE_CONSTANTS_PLUGIN,
    ];
  } ,*/
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
};

export = WORKER_APP_CONFIG;
