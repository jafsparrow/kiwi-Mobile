import { Component, OnInit, ViewContainerRef  } from "@angular/core";

import { prompt, PromptResult, inputType, alert } from "ui/dialogs";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ModalComponent} from "./modal/modal.component";
import { ProductDetailComponent} from "./product/product.component";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { ProductService } from "../shared/services/product.service";
import { Product } from "../shared/models/product";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { CartService } from "../shared/services/car.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    items: Product[];
    image ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/220px-Ice_Cream_dessert_02.jpg";

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService,
        private modal: ModalDialogService, private vcRef: ViewContainerRef,
        private productService: ProductService,
        private router: RouterExtensions,
        private cartService: CartService) { }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();
        this.items = this.productService.getProducts();
    }

    enterQuantity(item) {
        this.showModal(item);
    }

    public showModal(item) {
        let options = {
            context: {
                name: item.name,
                price: 22
            },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        let selectedQuantity = 0;
        this.modal.showModal(ModalComponent, options).then(res => {
            console.log(res);
            if(res){
                selectedQuantity = parseInt(res);
                console.log(`the value returned from other method ${selectedQuantity}`);
                if(!isNaN(selectedQuantity)){
                    console.log(selectedQuantity);
                    const productsDetails = { 
                        product: item.id,
                        productPrice: item.price, 
                        quantity: selectedQuantity
                    }
                    this.cartService.addProductToCart(item, selectedQuantity);
                }


            }
            console.log(this.cartService.getTheCartProductCount());
        });
    }

    navigateBack() {
        this.router.backToPreviousPage();
    }

    showProduct(item) {
        let options = {
            context: {
                name: item.name,
                image: item.image,
                price: item.price
            },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ProductDetailComponent, options)
            .then()
    }
}