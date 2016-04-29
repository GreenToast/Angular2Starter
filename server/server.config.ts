export class Config{
    constructor(
        public prodmode: boolean,
        public renderServerSide: boolean,
        public webWorker: boolean,
        public baseUrl: string,
        public port: number
    ){} 
}
 
export declare var devServer: Config;
export declare var prodServer: Config;
devServer =  new Config(false, true, true, 'http://localhost', 8080);
prodServer = new Config(true, true, true, 'http://localhost', 8080); 