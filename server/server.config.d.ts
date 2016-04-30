
export interface Config{
    prodmode: boolean;
    renderServerSide: boolean;
    webWorker: boolean,
    baseUrl: string,
    port: number
}

export var devServer: Config;
export var prodServer: Config;

