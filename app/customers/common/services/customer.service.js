"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customers_list_1 = require("../models/customers.list");
require("rxjs/add/observable/from");
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.items = customers_list_1.customers;
    }
    CustomerService.prototype.getItems = function () {
        return this.items;
    };
    CustomerService.prototype.getItem = function (id) {
        return customers_list_1.customers.filter(function (item) { return item.id === id; })[0];
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsMkRBQXFEO0FBR3JELG9DQUFpQztBQUdqQztJQUVJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBUyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsTUFBTSxDQUFDLDBCQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVpRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBYTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgY3VzdG9tZXJzIH0gZnJvbSBcIi4uL21vZGVscy9jdXN0b21lcnMubGlzdFwiO1xyXG5pbXBvcnQgeyBDdXN0b21lciB9IGZyb20gXCIuLi9tb2RlbHMvY3VzdG9tZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nXHJcbiBcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZXJ2aWNlIHtcclxuICAgIGl0ZW1zOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gY3VzdG9tZXJzOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogQ3VzdG9tZXIge1xyXG4gICAgICAgIHJldHVybiBjdXN0b21lcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==