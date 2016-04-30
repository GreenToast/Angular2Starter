module.exports = {
    devServer: {
        prodmode: false,
        renderServerSide: true,
        webWorker:true,
        preboot: {appRoot : 'app'},
        baseUrl: 'http://localhost',
        port: 8080
    },
    prodServer: {
        prodmode: true,
        renderServerSide: true,
        webWorker:false,
        baseUrl: 'http://localhost',
        port: 8080
    }
}