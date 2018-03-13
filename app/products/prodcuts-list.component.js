"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var modal_component_1 = require("./modal/modal.component");
var product_component_1 = require("./product-detail-modal/product.component");
var product_service_1 = require("../shared/services/product.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var car_service_1 = require("../shared/services/car.service");
var auth_service_1 = require("../shared/services/auth.service");
var ProductsListComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ProductsListComponent(
        // private itemService: ItemService,
        modal, vcRef, productService, router, cartService, authService) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.productService = productService;
        this.router = router;
        this.cartService = cartService;
        this.authService = authService;
        this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/220px-Ice_Cream_dessert_02.jpg";
        this.filteredProducts = [];
        this.items = [];
        this.isLoading = true;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        // this.items = this.itemService.getItems();
        // this.items = this.productService.getProducts();
        this.getProducts();
    };
    ProductsListComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProductsFromStore()
            .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id + " => " + JSON.stringify(doc.data()));
                var item = doc.data();
                var id = doc.id;
                item['id'] = id;
                _this.items.push(item);
                _this.isLoading = false;
                _this.assignCopy();
            });
        });
    };
    ProductsListComponent.prototype.enterQuantity = function (item) {
        this.showModal(item);
    };
    ProductsListComponent.prototype.showModal = function (item) {
        var _this = this;
        var options = {
            context: {
                name: item.name,
                price: 22
            },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        var selectedQuantity = 0;
        this.modal.showModal(modal_component_1.ModalComponent, options).then(function (res) {
            console.log(res);
            if (res) {
                selectedQuantity = parseInt(res);
                console.log("the value returned from other method " + selectedQuantity);
                if (!isNaN(selectedQuantity)) {
                    console.log(selectedQuantity);
                    var productsDetails = {
                        product: item.id,
                        productPrice: item.price,
                        quantity: selectedQuantity
                    };
                    _this.cartService.addProductToCart(item, selectedQuantity);
                }
            }
            console.log(_this.cartService.getTheCartProductCount());
        });
    };
    ProductsListComponent.prototype.navigateBack = function () {
        this.router.backToPreviousPage();
    };
    ProductsListComponent.prototype.showProduct = function (item) {
        var options = {
            context: {
                name: item.name,
                image: item.image,
                price: item.price
            },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(product_component_1.ProductDetailComponent, options)
            .then();
    };
    ProductsListComponent.prototype.singOut = function () {
        console.log('signing out');
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    ProductsListComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        var searchTerm = searchBar.text;
        searchBar.dismissSoftInput();
        this.filterProducts(searchTerm);
    };
    ProductsListComponent.prototype.onClear = function (args) {
        var searchBar = args.object;
        searchBar.dismissSoftInput();
        this.filterProducts(null);
    };
    ProductsListComponent.prototype.assignCopy = function () {
        this.filteredProducts = Object.assign([], this.items);
    };
    ProductsListComponent.prototype.filterProducts = function (value) {
        if (!value) {
            this.assignCopy();
        }
        this.filteredProducts = Object.assign([], this.items.filter(function (item) { return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1; }));
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: "ns-product-list",
            moduleId: module.id,
            templateUrl: "./prodcuts-list.component.html",
            styleUrls: ["./prodcuts-list.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef,
            product_service_1.ProductService,
            router_extensions_1.RouterExtensions,
            car_service_1.CartService,
            auth_service_1.AuthService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZGN1dHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kY3V0cy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUlyRSxtRUFBNkU7QUFDN0UsMkRBQXdEO0FBQ3hELDhFQUFpRjtBQUNqRixzRUFBb0U7QUFFcEUsbUZBQWlGO0FBQ2pGLDhEQUE2RDtBQUc3RCxnRUFBOEQ7QUFROUQ7SUFNSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pIO1FBQ0ksb0NBQW9DO1FBQzVCLEtBQXlCLEVBQVUsS0FBdUIsRUFDMUQsY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0I7UUFKeEIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMxRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFYcEMsVUFBSyxHQUFFLG1IQUFtSCxDQUFDO1FBRTNILHFCQUFnQixHQUFjLEVBQUUsQ0FBQztRQVV6QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU4sd0NBQVEsR0FBUjtRQUNJLDRDQUE0QztRQUM1QyxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsSUFBSSxDQUNELFVBQUMsYUFBc0M7WUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUksR0FBRyxDQUFDLEVBQUUsWUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBRyxDQUFDLENBQUM7Z0JBQzFELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVUsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUV2QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQ04sQ0FBQztJQUNOLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBNkJDO1FBNUJHLElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsRUFBRTthQUNaO1lBQ0QsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdDQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ0osZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUF3QyxnQkFBa0IsQ0FBQyxDQUFDO2dCQUN4RSxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFNLGVBQWUsR0FBRzt3QkFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNoQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ3hCLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzdCLENBQUE7b0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztZQUdMLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1osSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDBDQUFzQixFQUFFLE9BQU8sQ0FBQzthQUNoRCxJQUFJLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDbEMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsS0FBSztRQUNoQixFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDckIsQ0FBQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkQsVUFBQSxJQUFJLElBQUcsT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBMUQsQ0FBMEQsQ0FDcEUsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpJUSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FXcUIsNEJBQWtCLEVBQWlCLHVCQUFnQjtZQUMxQyxnQ0FBYztZQUN0QixvQ0FBZ0I7WUFDWCx5QkFBVztZQUNYLDBCQUFXO09BZDNCLHFCQUFxQixDQWtJakM7SUFBRCw0QkFBQztDQUFBLEFBbElELElBa0lDO0FBbElZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IHByb21wdCwgUHJvbXB0UmVzdWx0LCBpbnB1dFR5cGUsIGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudH0gZnJvbSBcIi4vbW9kYWwvbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0LWRldGFpbC1tb2RhbC9wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3RcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvY2FyLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHJvZHVjdC1saXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2RjdXRzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcHJvZGN1dHMtbGlzdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpdGVtczogUHJvZHVjdFtdO1xuICAgIGltYWdlID1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMy8zMS9JY2VfQ3JlYW1fZGVzc2VydF8wMi5qcGcvMjIwcHgtSWNlX0NyZWFtX2Rlc3NlcnRfMDIuanBnXCI7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIGZpbHRlcmVkUHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvLyBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIC8vIHRoaXMuaXRlbXMgPSB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0c0Zyb21TdG9yZSgpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHF1ZXJ5U25hcHNob3Q6IGZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XG4gICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICAgIGl0ZW1bJ2lkJ10gPSBpZDtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCg8UHJvZHVjdD5pdGVtKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGhpcy5hc3NpZ25Db3B5KCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGVudGVyUXVhbnRpdHkoaXRlbSkge1xuICAgICAgICB0aGlzLnNob3dNb2RhbChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd01vZGFsKGl0ZW0pIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHByaWNlOiAyMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICBsZXQgc2VsZWN0ZWRRdWFudGl0eSA9IDA7XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYocmVzKXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFF1YW50aXR5ID0gcGFyc2VJbnQocmVzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gb3RoZXIgbWV0aG9kICR7c2VsZWN0ZWRRdWFudGl0eX1gKTtcbiAgICAgICAgICAgICAgICBpZighaXNOYU4oc2VsZWN0ZWRRdWFudGl0eSkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNEZXRhaWxzID0geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2U6IGl0ZW0ucHJpY2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHNlbGVjdGVkUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQoaXRlbSwgc2VsZWN0ZWRRdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FydFNlcnZpY2UuZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVCYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdChpdGVtKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChQcm9kdWN0RGV0YWlsQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgIH1cblxuICAgIHNpbmdPdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWduaW5nIG91dCcpO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoQmFyLnRleHQ7XG4gICAgICAgIHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIHRoaXMuZmlsdGVyUHJvZHVjdHMoc2VhcmNoVGVybSk7XG5cbiAgICB9XG5cbiAgICBvbkNsZWFyKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIHRoaXMuZmlsdGVyUHJvZHVjdHMobnVsbCk7XG4gICAgfVxuXG4gICAgYXNzaWduQ29weSgpOiBhbnkge1xuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJQcm9kdWN0cyh2YWx1ZSkge1xuICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuYXNzaWduQ29weSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLml0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgIGl0ZW09PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLSAxXG4gICAgICAgICkpXG4gICAgfVxufSJdfQ==