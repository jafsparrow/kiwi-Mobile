import { Component } from "@angular/core";

import { ObservableArray } from "tns-core-modules/data/observable-array";

import { ProductService } from "../shared/services/product.service";
import { CartService } from "../shared/services/car.service";
import { Product } from "../shared/models/product";
import { LineItem } from "../shared/models/line-item";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";

@Component({
    selector: "app-order",
    moduleId: module.id,
    templateUrl: "./order.component.html",
    styleUrls: [
        "./order.component.css"
    ]
})

export class OrderComponent {
    private _cartItems: ObservableArray<LineItem>;
    cartItemCount: number;
    cartTotalPrice: number;

    constructor(private productService: ProductService,
                private cartService: CartService,
                private router: RouterExtensions) {
        
        this.getAllCartItems();
        this.cartItemCount = this.cartService.getTheCartProductCount()
        this.cartTotalPrice = this.cartService.getCartTotalPrice();
    }

    getAllCartItems() {
        this._cartItems = new ObservableArray(this.cartService.getTheCart());
              
    }

    get cartItems(): ObservableArray<LineItem> {
        return this._cartItems;
    }

    // get cartItemCount(): number {
    //     console.log("number of times");
    //     return 4;//this.cartService.getTheCartProductCount();
    
    // }
    confirmOrder() {
        alert('Placing your order now, please wait..!')
    }

    navigateBack() {
        this.router.backToPreviousPage();
    }
}