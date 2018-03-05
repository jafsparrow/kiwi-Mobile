import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions} from "nativescript-angular/router/router-extensions";

import { CustomerService } from "../common/services/customer.service";
import { Observable } from "rxjs/Observable";
import { scan } from "rxjs/operators/scan";
import { mergeMap } from "rxjs/operators//mergeMap";
import { Customer} from "../common/models/customer";
import { customers } from "../common/models/customers.list";
// nativescript imports
import { Page } from 'ui/page';
import { SearchBar } from 'ui/search-bar';
import { View } from "ui/core/view";

@Component({
    selector:"ns-customer-list",
    moduleId: module.id,
    templateUrl: "./customer-list.component.html",
    styleUrls: ["./customer-list.component.css"]
})

export class CustomerListComponent implements OnInit {

    customers: Array<Customer>;
    // @ViewChild("searchBar") SearchBar: ElementRef;
    constructor(private router: RouterExtensions,
                private customerService: CustomerService) {

    }

    ngOnInit() {
        // this.customers = this.customerService.getItems();
        // this.customerService.getItems()
        //     .subscribe(res => {
        //         console.log('inside the subscribe area');
        //         console.log(res);
        // //     })
        this.customers = this.customerService.getItems()
        // console.log('inside animation');
        // let searchcontainer = <SearchBar>this.SearchBar.nativeElement;
        // searchcontainer.dismissSoftInput();
        // searchcontainer.animate({
        //     opacity: 0.5,
        //     duration: 3000
        // })
            
    }

    navigate() {
        this.router.navigate(['/customers/detail']);
    }
    navigateBack() {
        this.router.backToPreviousPage();
    }

    onSubmit($event) {
        console.log('search submitted');

    }

    onClear() {
        console.log('search cleared');
    }
}