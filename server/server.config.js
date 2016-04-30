module.exports = {
    devServer: {
        enableProdMode: true,
        renderServerSide: true,
        webWorker: false,
        preboot: {appRoot : 'app'},
        baseUrl: 'http://localhost',
        port: 8080
    },
    prodServer: {
        enableProdMode: true,
        renderServerSide: true,
        webWorker:false,
        baseUrl: 'http://localhost',
        port: 8080
    }
}