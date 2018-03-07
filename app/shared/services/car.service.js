"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase/app");
var CartService = /** @class */ (function () {
    function CartService() {
        this.orderRef = firebase.firestore().collection("orders");
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
    CartService.prototype.submitOrder = function () {
        var _this = this;
        if (this.lineItems.length > 0) {
            var order = this.createOrderFromLineItems();
            return this.orderRef.add(order)
                .then(function (res) {
                _this.lineItems = [];
                console.log('item added');
                return true;
            });
        }
    };
    CartService.prototype.createOrderFromLineItems = function () {
        var order = {
            status: 'confirmed',
            date: new Date(),
            distributorId: 'txxhsltj'
        };
        var totalAmount = 0;
        this.lineItems.forEach(function (item) {
            totalAmount += item.totalPrice;
        });
        order['price'] = totalAmount;
        order['product'] = this.lineItems;
        return order;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUk3RDtJQUlFO1FBREEsYUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELHNDQUFnQixHQUFoQixVQUFpQixPQUFZLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsT0FBTyxDQUFDLElBQUksMEJBQXFCLFFBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFD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ImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgTGluZUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9tb2RlbHMvb3JkZXJcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XHJcblxyXG4gIGxpbmVJdGVtczogTGluZUl0ZW1bXTtcclxuICBvcmRlclJlZiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJvcmRlcnNcIik7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxpbmVJdGVtcyA9IFtdO1xyXG4gIH1cclxuICBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3Q6IGFueSwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coYHByb2R1Y3QgbmFtZSBpcyAke3Byb2R1Y3QubmFtZX0gYW5kIHF1YW50aXRpeSBpcyAke3F1YW50aXR5fWApO1xyXG4gICAgY29uc3QgbGluZUl0ZW06IExpbmVJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvZHVjdCk7XHJcbiAgICBsaW5lSXRlbS5pZCA9IHByb2R1Y3QuaWQ7XHJcbiAgICBsaW5lSXRlbS5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgbGluZUl0ZW0udG90YWxQcmljZSA9IHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eTtcclxuICAgIGNvbnNvbGUubG9nKGxpbmVJdGVtLnRvdGFsUHJpY2UpO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpbmVJdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIC8vIGVkaXQgdGhlIGN1cnJlbnQgaXRlbSAuXHJcbiAgICAgIHRoaXMubGluZUl0ZW1zW2luZGV4XS5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICB0aGlzLmxpbmVJdGVtc1tpbmRleF0udG90YWxQcmljZSA9IHF1YW50aXR5ICogcHJvZHVjdC5wcmljZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpbmVJdGVtcy5wdXNoKGxpbmVJdGVtKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGB0aGUgbGVuZ3RoIG5vdyBpcyAke3RoaXMubGluZUl0ZW1zLmxlbmd0aH1gKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb2R1Y3RGcm9tQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuICAgIC8vIGNvbnN0IGluZGV4ID0gdGhpcy5saW5lSXRlbXMuaW5kZXhPZihwcm9kdWN0KTtcclxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmxpbmVJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtLmlkICE9PSBwcm9kdWN0LmlkO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmxpbmVJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQcm9kY3V0UXVhbnRpdHkocHJvZHVjdDogYW55LCBuZXdRdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBsaW5lSXRlbTogTGluZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBwcm9kdWN0KTtcclxuICAgIGxpbmVJdGVtLnF1YW50aXR5ID0gbmV3UXVhbnRpdHk7XHJcbiAgICBsaW5lSXRlbS50b3RhbFByaWNlID0gcHJvZHVjdC5wcmljZSAqIG5ld1F1YW50aXR5O1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saW5lSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbS5wcm9kdWN0ID09PSBwcm9kdWN0LmlkXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5saW5lSXRlbXNbaW5kZXhdLCBsaW5lSXRlbSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZWRpdFByb2R1Y3RGcm9tQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldENhcnRUb3RhbFByaWNlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lSXRlbXMucmVkdWNlKChwcmV2LCBpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2ID0gcHJldiArIGl0ZW0udG90YWxQcmljZTtcclxuXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgZ2V0VGhlQ2FydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdmcm9tIHNlcnZpY2UgZmV0Y2hpbmcgY2FydCBpdGVtLicpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FydFN1bW1hcnkoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyByZXR1cm4ge1xyXG4gICAgLy8gICBjb3VudDogdGhpcy5saW5lSXRlbXMubGVuZ3RoO1xyXG4gICAgLy8gICB0b3RhbFByaWNlOiB0aGlzLmxpbmVcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdE9yZGVyKCkge1xyXG4gICAgaWYgKHRoaXMubGluZUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG9yZGVyID0gdGhpcy5jcmVhdGVPcmRlckZyb21MaW5lSXRlbXMoKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyUmVmLmFkZChvcmRlcilcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYWRkZWQnKTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVPcmRlckZyb21MaW5lSXRlbXMoKSB7XHJcbiAgICBsZXQgb3JkZXIgPSB7XHJcbiAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGRpc3RyaWJ1dG9ySWQ6ICd0eHhoc2x0aidcclxuICAgIH1cclxuICAgIGxldCB0b3RhbEFtb3VudCA9IDA7XHJcbiAgICB0aGlzLmxpbmVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0b3RhbEFtb3VudCArPSBpdGVtLnRvdGFsUHJpY2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvcmRlclsncHJpY2UnXSA9IHRvdGFsQW1vdW50O1xyXG4gICAgb3JkZXJbJ3Byb2R1Y3QnXSA9IHRoaXMubGluZUl0ZW1zO1xyXG5cclxuICAgIHJldHVybiBvcmRlcjtcclxuXHJcbiAgfVxyXG5cclxuICB0ZWFyRG93bkN1cnJlbnRDYXJ0KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLmxpbmVJdGVtcy5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcclxuXHJcbiAgICAgIHRoaXMubGluZUl0ZW1zLnBvcCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnKioqKioqKioqJyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVJdGVtcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbn0iXX0=