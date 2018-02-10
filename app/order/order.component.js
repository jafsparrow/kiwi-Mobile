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
        alert('Placing your order now, please wait..!');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDJFQUF5RTtBQUV6RSxzRUFBb0U7QUFDcEUsOERBQTZEO0FBRzdELG1GQUFpRjtBQVdqRjtJQUtJLHdCQUFvQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixNQUF3QjtRQUZ4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFeEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFRCxzQkFBSSxxQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLDREQUE0RDtJQUU1RCxJQUFJO0lBQ0oscUNBQVksR0FBWjtRQUNJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFsQ1EsY0FBYztRQVQxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFO2dCQUNQLHVCQUF1QjthQUMxQjtTQUNKLENBQUM7eUNBT3NDLGdDQUFjO1lBQ2pCLHlCQUFXO1lBQ2hCLG9DQUFnQjtPQVBuQyxjQUFjLENBbUMxQjtJQUFELHFCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9jYXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtb3JkZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL29yZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICBcIi4vb3JkZXIuY29tcG9uZW50LmNzc1wiXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY2FydEl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8TGluZUl0ZW0+O1xyXG4gICAgY2FydEl0ZW1Db3VudDogbnVtYmVyO1xyXG4gICAgY2FydFRvdGFsUHJpY2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdldEFsbENhcnRJdGVtcygpO1xyXG4gICAgICAgIHRoaXMuY2FydEl0ZW1Db3VudCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpXHJcbiAgICAgICAgdGhpcy5jYXJ0VG90YWxQcmljZSA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydFRvdGFsUHJpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxDYXJ0SXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FydEl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLmNhcnRTZXJ2aWNlLmdldFRoZUNhcnQoKSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhcnRJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8TGluZUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FydEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCBjYXJ0SXRlbUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJudW1iZXIgb2YgdGltZXNcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIDQ7Ly90aGlzLmNhcnRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKTtcclxuICAgIFxyXG4gICAgLy8gfVxyXG4gICAgY29uZmlybU9yZGVyKCkge1xyXG4gICAgICAgIGFsZXJ0KCdQbGFjaW5nIHlvdXIgb3JkZXIgbm93LCBwbGVhc2Ugd2FpdC4uIScpXHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG59Il19