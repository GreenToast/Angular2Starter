class E2eConfig{    
    constructor(baseUrl:string){
        this.baseUrl = baseUrl;
    }
    baseUrl:string;
}

var devlocalConfig: E2eConfig = new E2eConfig('http://localhost:8080');

export {E2eConfig,devlocalConfig};