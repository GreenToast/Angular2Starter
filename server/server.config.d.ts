
export interface Preboot{
    appRoot: string,
    listen: any,
    freeze:  any, //{ name: 'spinner' }
    replay:  string,
    buffer:  boolean,
    debug:   boolean,
    uglify:  boolean
}

type PrebootOptions = Preboot | boolean;

export interface Config{
    enableProdMode: boolean;
    renderServerSide: boolean;
    webWorker: boolean,
    preboot:Preboot,
    baseUrl: string,
    port: number
}

export var devServer: Config;
export var prodServer: Config;

