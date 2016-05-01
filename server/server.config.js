module.exports = {
    devServer: {
        enableProdMode: false,
        renderServerSide: true,
        webWorker: true,
        preboot: {appRoot : 'app'},
        baseUrl: 'http://localhost',
        port: 8080
    },
    prodServer: {
        enableProdMode: true,
        renderServerSide: true,
        webWorker:true,
        baseUrl: 'http://localhost',
        port: 8080
    }
}