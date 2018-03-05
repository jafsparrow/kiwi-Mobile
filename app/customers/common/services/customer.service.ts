import { Injectable } from "@angular/core";

import { customers } from "../models/customers.list";
import { Customer } from "../models/customer";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from'
 
@Injectable()
export class CustomerService {
    items: any;
    constructor() {
        this.items = customers; 
    }

    getItems(){
        return this.items
    }

    getItem(id: number): Customer {
        return customers.filter(item => item.id === id)[0];
    }
}
