"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    function CartService() {
        this.lineItems = [];
    }
    CartService.prototype.addProductToCart = function (product, quantity) {
        console.log("product name is " + product.name + " and quantitiy is " + quantity);
        var lineItem = Object.assign({}, product);
        lineItem.id = product.id;
        lineItem.quantity = quantity;
        lineItem.totalPrice = product.price * quantity;
        console.log(lineItem.totalPrice);
        var index = this.lineItems.findIndex(function (item) {
            return item.id === product.id;
        });
        if (index > -1) {
            // edit the current item .
            this.lineItems[index].quantity = quantity;
            this.lineItems[index].totalPrice = quantity * product.price;
        }
        else {
            this.lineItems.push(lineItem);
        }
        console.log("the length now is " + this.lineItems.length);
        console.log(this.lineItems);
    };
    CartService.prototype.removeProductFromCart = function (product) {
        // const index = this.lineItems.indexOf(product);
        var filteredItems = this.lineItems.filter(function (item) {
            return item.id !== product.id;
        });
        this.lineItems = filteredItems;
    };
    CartService.prototype.changeProdcutQuantity = function (product, newQuantity) {
        var lineItem = Object.assign({}, product);
        lineItem.quantity = newQuantity;
        lineItem.totalPrice = product.price * newQuantity;
        var index = this.lineItems.findIndex(function (item) {
            return item.product === product.id;
        });
        Object.assign(this.lineItems[index], lineItem);
    };
    CartService.prototype.editProductFromCart = function (product) {
    };
    CartService.prototype.getTheCartProductCount = function () {
        return this.lineItems.length;
    };
    CartService.prototype.getCartTotalPrice = function () {
        return this.lineItems.reduce(function (prev, item) {
            return prev = prev + item.totalPrice;
        }, 0);
    };
    CartService.prototype.getTheCart = function () {
        console.log('from service fetching cart item.');
        console.log(this.lineItems);
        return this.lineItems;
    };
    CartService.prototype.getCartSummary = function () {
        // return {
        //   count: this.lineItems.length;
        //   totalPrice: this.line
        // }
    };
    CartService.prototype.tearDownCurrentCart = function () {
        console.log(this.lineItems.length);
        for (var i = this.lineItems.length; i > 0; i--) {
            this.lineItems.pop();
            console.log('*********');
        }
        console.log(this.lineItems.length);
    };
    CartService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQztJQUlJO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUlELHNDQUFnQixHQUFoQixVQUFpQixPQUFZLEVBQUUsUUFBZ0I7UUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsT0FBTyxDQUFDLElBQUksMEJBQXFCLFFBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFLFVBQUMsSUFBSTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUQsQ0FBQztR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O0FBbkdZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvbGluZS1pdGVtXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL21vZGVscy9vcmRlclwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XHJcbiAgICBcclxuICAgIGxpbmVJdGVtczogTGluZUl0ZW1bXTtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmxpbmVJdGVtcyA9IFtdO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICBcclxuICAgIGFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdDogYW55LCBxdWFudGl0eTogbnVtYmVyKSB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgcHJvZHVjdCBuYW1lIGlzICR7cHJvZHVjdC5uYW1lfSBhbmQgcXVhbnRpdGl5IGlzICR7cXVhbnRpdHl9YCk7XHJcbiAgICAgIGNvbnN0IGxpbmVJdGVtOiBMaW5lSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpO1xyXG4gICAgICBsaW5lSXRlbS5pZCA9IHByb2R1Y3QuaWQ7XHJcbiAgICAgIGxpbmVJdGVtLnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICAgIGxpbmVJdGVtLnRvdGFsUHJpY2UgPSBwcm9kdWN0LnByaWNlICogcXVhbnRpdHk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpbmVJdGVtLnRvdGFsUHJpY2UpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGluZUl0ZW1zLmZpbmRJbmRleCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZihpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgLy8gZWRpdCB0aGUgY3VycmVudCBpdGVtIC5cclxuICAgICAgICB0aGlzLmxpbmVJdGVtc1tpbmRleF0ucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgICAgICB0aGlzLmxpbmVJdGVtc1tpbmRleF0udG90YWxQcmljZSA9IHF1YW50aXR5ICogcHJvZHVjdC5wcmljZTtcclxuICBcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zLnB1c2gobGluZUl0ZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGB0aGUgbGVuZ3RoIG5vdyBpcyAke3RoaXMubGluZUl0ZW1zLmxlbmd0aH1gKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0KHByb2R1Y3Q6IGFueSkge1xyXG4gICAgICAvLyBjb25zdCBpbmRleCA9IHRoaXMubGluZUl0ZW1zLmluZGV4T2YocHJvZHVjdCk7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmxpbmVJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IHByb2R1Y3QuaWQ7XHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgICAgIHRoaXMubGluZUl0ZW1zID0gZmlsdGVyZWRJdGVtcztcclxuICAgIH1cclxuICBcclxuICAgIGNoYW5nZVByb2RjdXRRdWFudGl0eShwcm9kdWN0OiBhbnksIG5ld1F1YW50aXR5OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgbGluZUl0ZW06IExpbmVJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvZHVjdCk7XHJcbiAgICAgIGxpbmVJdGVtLnF1YW50aXR5ID0gbmV3UXVhbnRpdHk7XHJcbiAgICAgIGxpbmVJdGVtLnRvdGFsUHJpY2UgPSBwcm9kdWN0LnByaWNlICogbmV3UXVhbnRpdHk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saW5lSXRlbXMuZmluZEluZGV4KCBpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0ID09PSBwcm9kdWN0LmlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubGluZUl0ZW1zW2luZGV4XSwgbGluZUl0ZW0pO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZWRpdFByb2R1Y3RGcm9tQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldFRoZUNhcnRQcm9kdWN0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zLmxlbmd0aDtcclxuICAgIH0gICAgXHJcblxyXG4gICAgZ2V0Q2FydFRvdGFsUHJpY2UoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zLnJlZHVjZSgocHJldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2ID0gcHJldiArIGl0ZW0udG90YWxQcmljZTtcclxuICAgICAgICBcclxuICAgICAgfSwwKTtcclxuICAgIH1cclxuICAgIGdldFRoZUNhcnQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmcm9tIHNlcnZpY2UgZmV0Y2hpbmcgY2FydCBpdGVtLicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVJdGVtcyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpbmVJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJ0U3VtbWFyeSgpIHtcclxuXHJcblxyXG5cclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICBjb3VudDogdGhpcy5saW5lSXRlbXMubGVuZ3RoO1xyXG4gICAgICAvLyAgIHRvdGFsUHJpY2U6IHRoaXMubGluZVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgdGVhckRvd25DdXJyZW50Q2FydCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGluZUl0ZW1zLmxlbmd0aDsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zLnBvcCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKionKTtcclxuICAgICAgIH1cclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59Il19