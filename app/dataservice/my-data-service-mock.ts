import { DataService } from "./my-data-service";

export class MyDataServiceMock implements DataService{
    
    getData(){        
        return "Mock";
    }
}