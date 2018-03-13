import { Component, OnInit, ViewContainerRef  } from "@angular/core";

import { prompt, PromptResult, inputType, alert } from "ui/dialogs";
import { SearchBar } from "ui/search-bar";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ModalComponent} from "./modal/modal.component";
import { ProductDetailComponent} from "./product-detail-modal/product.component";
import { ProductService } from "../shared/services/product.service";
import { Product } from "../shared/models/product";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { CartService } from "../shared/services/car.service";

import { firestore } from "nativescript-plugin-firebase";
import { AuthService } from "../shared/services/auth.service";

@Component({
    selector: "ns-product-list",
    moduleId: module.id,
    templateUrl: "./prodcuts-list.component.html",
    styleUrls: ["./prodcuts-list.component.css"]
})
export class ProductsListComponent implements OnInit {

    items: Product[];
    image ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/220px-Ice_Cream_dessert_02.jpg";
    isLoading: boolean;
    filteredProducts: Product[] = [];
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        // private itemService: ItemService,
        private modal: ModalDialogService, private vcRef: ViewContainerRef,
        private productService: ProductService,
        private router: RouterExtensions,
        private cartService: CartService,
        private authService: AuthService) {
            this.items = [];
            this.isLoading = true;
         }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();
        // this.items = this.productService.getProducts();
        this.getProducts();
    }

    getProducts() {
        this.productService.getProductsFromStore()
        .then(
            (querySnapshot: firestore.QuerySnapshot) => {
                querySnapshot.forEach(doc => {
                  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                  let item = doc.data();
                  const id = doc.id;
                  item['id'] = id;
                  this.items.push(<Product>item);
                  this.isLoading = false;
                    
                  this.assignCopy();
                  
                });
              }
        );
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

    singOut() {
        console.log('signing out');
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        const searchTerm = searchBar.text;
        searchBar.dismissSoftInput();
        this.filterProducts(searchTerm);

    }

    onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.dismissSoftInput();
        this.filterProducts(null);
    }

    assignCopy(): any {
        this.filteredProducts = Object.assign([], this.items);
    }

    filterProducts(value) {
        if(!value) {
            this.assignCopy()
        }

        this.filteredProducts = Object.assign([], this.items.filter(
            item=> item.name.toLowerCase().indexOf(value.toLowerCase()) > - 1
        ))
    }
}