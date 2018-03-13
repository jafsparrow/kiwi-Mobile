
import { Component, OnInit, ViewContainerRef  } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: "ns-product-detail",
    moduleId: module.id,
    templateUrl: "./product.component.html",
})
export class ProductDetailComponent implements OnInit {
 
    product: any;
    constructor(private params: ModalDialogParams
    ) { }

    ngOnInit(){
        this.product = this.params.context;
    }
}
