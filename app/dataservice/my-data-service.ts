export interface DataService {
    getData();
}

export class MyDataService {
    getData(){
        return "Dennis";
    }
}