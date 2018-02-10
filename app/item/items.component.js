"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var modal_component_1 = require("./modal/modal.component");
var product_component_1 = require("./product/product.component");
var item_service_1 = require("./item.service");
var product_service_1 = require("../shared/services/product.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var car_service_1 = require("../shared/services/car.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, modal, vcRef, productService, router, cartService) {
        this.itemService = itemService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.productService = productService;
        this.router = router;
        this.cartService = cartService;
        this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/220px-Ice_Cream_dessert_02.jpg";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // this.items = this.itemService.getItems();
        this.items = this.productService.getProducts();
    };
    ItemsComponent.prototype.enterQuantity = function (item) {
        this.showModal(item);
    };
    ItemsComponent.prototype.showModal = function (item) {
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
    ItemsComponent.prototype.navigateBack = function () {
        this.router.backToPreviousPage();
    };
    ItemsComponent.prototype.showProduct = function (item) {
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
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./items.component.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            dialogs_1.ModalDialogService, core_1.ViewContainerRef,
            product_service_1.ProductService,
            router_extensions_1.RouterExtensions,
            car_service_1.CartService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBR3JFLG1FQUE2RTtBQUM3RSwyREFBd0Q7QUFDeEQsaUVBQW9FO0FBRXBFLCtDQUE2QztBQUM3QyxzRUFBb0U7QUFFcEUsbUZBQWlGO0FBQ2pGLDhEQUE2RDtBQVE3RDtJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQ2hDLEtBQXlCLEVBQVUsS0FBdUIsRUFDMUQsY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsV0FBd0I7UUFKaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMxRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFScEMsVUFBSyxHQUFFLG1IQUFtSCxDQUFDO0lBUW5GLENBQUM7SUFFekMsaUNBQVEsR0FBUjtRQUNJLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sa0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkE2QkM7UUE1QkcsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxFQUFFO2FBQ1o7WUFDRCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsZ0NBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDSixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQXdDLGdCQUFrQixDQUFDLENBQUM7Z0JBQ3hFLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzlCLElBQU0sZUFBZSxHQUFHO3dCQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQ2hCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDeEIsUUFBUSxFQUFFLGdCQUFnQjtxQkFDN0IsQ0FBQTtvQkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO1lBR0wsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDcEI7WUFDRCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMENBQXNCLEVBQUUsT0FBTyxDQUFDO2FBQ2hELElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQXBFUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQU9tQywwQkFBVztZQUN6Qiw0QkFBa0IsRUFBaUIsdUJBQWdCO1lBQzFDLGdDQUFjO1lBQ3RCLG9DQUFnQjtZQUNYLHlCQUFXO09BVjNCLGNBQWMsQ0FxRTFCO0lBQUQscUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IHByb21wdCwgUHJvbXB0UmVzdWx0LCBpbnB1dFR5cGUsIGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC9tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3RcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvY2FyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbXMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IFByb2R1Y3RbXTtcbiAgICBpbWFnZSA9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzMvMzEvSWNlX0NyZWFtX2Rlc3NlcnRfMDIuanBnLzIyMHB4LUljZV9DcmVhbV9kZXNzZXJ0XzAyLmpwZ1wiO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBlbnRlclF1YW50aXR5KGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dNb2RhbChpdGVtKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBwcmljZTogMjJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNlbGVjdGVkUXVhbnRpdHkgPSAwO1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIGlmKHJlcyl7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWFudGl0eSA9IHBhcnNlSW50KHJlcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIG90aGVyIG1ldGhvZCAke3NlbGVjdGVkUXVhbnRpdHl9YCk7XG4gICAgICAgICAgICAgICAgaWYoIWlzTmFOKHNlbGVjdGVkUXVhbnRpdHkpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRRdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzRGV0YWlscyA9IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlOiBpdGVtLnByaWNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBzZWxlY3RlZFF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5hZGRQcm9kdWN0VG9DYXJ0KGl0ZW0sIHNlbGVjdGVkUXVhbnRpdHkpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcnRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5hdmlnYXRlQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3QoaXRlbSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUHJvZHVjdERldGFpbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKClcbiAgICB9XG59Il19