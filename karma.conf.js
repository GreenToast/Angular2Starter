var webpack = require('webpack');
module.exports = function (config) {
    config.set({
        basePath: '',
        //jasmine2 is used by the karma-jasmine-runner
        frameworks: ['jasmine', 'es6-shim'],
        files: [
            'test/vendors.ts',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'test/test_index.js'
        ],
        exclude: [],
        preprocessors: {
            'test/vendors.ts': ['webpack', 'sourcemap'],
            'test/test_index.js': ['webpack', 'sourcemap']
        },
        webpack: {
            resolve: {
                root: __dirname,
                extensions: ['', '.ts', '.js', '.json']
            },
            devtool: 'inline-source-map',
            /*plugins:[new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })],*/
            module: {
                loaders: [
                    {
                        test: /\.ts?$/, loader: 'ts-loader'
                    },
                    {test: /\.json$/, loader: 'json'},
                    {test: /\.html$/, loader: 'raw'}
                ]
            },
            stats: {colors: true, reasons: true},
            debug: false
        },
        webpackMiddleware: {
            noInfo: true //please don't spam the console when running in karma!
        },
        plugins: [
            'karma-coverage',
            'karma-electron-launcher',
            'karma-es6-shim',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-sourcemap-loader',
            'karma-webpack'
            ], //forced since there is an issue with electron
        // possible values: 'dots', 'progress'
        reporters: ['progress', 'junit'],
        junitReporter: {
            outputDir: 'test_reports', // results will be saved as $outputDir/$browserName.xml
            outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true // add browser name to report and classes names
        },
        port: 9876,
        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers, only for feedback and as execution-environment
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Electron'],
        browserNoActivityTimeout: 30000,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};