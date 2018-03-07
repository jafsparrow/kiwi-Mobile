"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var product_service_1 = require("../shared/services/product.service");
var car_service_1 = require("../shared/services/car.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(productService, cartService, router) {
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.isPlacingOrder = false;
        this.getAllCartItems();
        this.cartItemCount = this.cartService.getTheCartProductCount();
        this.cartTotalPrice = this.cartService.getCartTotalPrice();
    }
    OrderComponent.prototype.getAllCartItems = function () {
        this._cartItems = new observable_array_1.ObservableArray(this.cartService.getTheCart());
    };
    Object.defineProperty(OrderComponent.prototype, "cartItems", {
        get: function () {
            return this._cartItems;
        },
        enumerable: true,
        configurable: true
    });
    // get cartItemCount(): number {
    //     console.log("number of times");
    //     return 4;//this.cartService.getTheCartProductCount();
    // }
    OrderComponent.prototype.confirmOrder = function () {
        var _this = this;
        this.isPlacingOrder = true;
        this.cartService.submitOrder()
            .then(function (res) {
            alert('Order has been placed successfully');
            _this.isPlacingOrder = false;
            _this.router.navigate(['/home'], { clearHistory: true });
        });
    };
    OrderComponent.prototype.navigateBack = function () {
        this.router.backToPreviousPage();
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: "app-order",
            moduleId: module.id,
            templateUrl: "./order.component.html",
            styleUrls: [
                "./order.component.css"
            ]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            car_service_1.CartService,
            router_extensions_1.RouterExtensions])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDJFQUF5RTtBQUV6RSxzRUFBb0U7QUFDcEUsOERBQTZEO0FBRzdELG1GQUFpRjtBQVdqRjtJQU1JLHdCQUFvQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixNQUF3QjtRQUZ4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFKNUMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFNbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFRCxzQkFBSSxxQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLDREQUE0RDtJQUU1RCxJQUFJO0lBQ0oscUNBQVksR0FBWjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7YUFDekIsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUlYLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUE1Q1EsY0FBYztRQVQxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFO2dCQUNQLHVCQUF1QjthQUMxQjtTQUNKLENBQUM7eUNBUXNDLGdDQUFjO1lBQ2pCLHlCQUFXO1lBQ2hCLG9DQUFnQjtPQVJuQyxjQUFjLENBNkMxQjtJQUFELHFCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9jYXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtb3JkZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL29yZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICBcIi4vb3JkZXIuY29tcG9uZW50LmNzc1wiXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY2FydEl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8TGluZUl0ZW0+O1xyXG4gICAgY2FydEl0ZW1Db3VudDogbnVtYmVyO1xyXG4gICAgY2FydFRvdGFsUHJpY2U6IG51bWJlcjtcclxuICAgIGlzUGxhY2luZ09yZGVyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRBbGxDYXJ0SXRlbXMoKTtcclxuICAgICAgICB0aGlzLmNhcnRJdGVtQ291bnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKVxyXG4gICAgICAgIHRoaXMuY2FydFRvdGFsUHJpY2UgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnRUb3RhbFByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ2FydEl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2NhcnRJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5jYXJ0U2VydmljZS5nZXRUaGVDYXJ0KCkpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXJ0SXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PExpbmVJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgY2FydEl0ZW1Db3VudCgpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwibnVtYmVyIG9mIHRpbWVzXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiA0Oy8vdGhpcy5jYXJ0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcbiAgICBcclxuICAgIC8vIH1cclxuICAgIGNvbmZpcm1PcmRlcigpIHtcclxuICAgICAgICB0aGlzLmlzUGxhY2luZ09yZGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLnN1Ym1pdE9yZGVyKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdPcmRlciBoYXMgYmVlbiBwbGFjZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxhY2luZ09yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10seyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9XHJcbn0iXX0=