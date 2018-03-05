import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";




@Component({
    selector:"ns-customer-detail",
    moduleId: module.id,
    templateUrl: "./customer-detail.component.html",
    styleUrls: ["./customer-detail.component.css"]
})
export class CustomerDetailComponent {

    constructor(private router: RouterExtensions) {

    }


    navigateBack() {
        this.router.backToPreviousPage();
    }
}