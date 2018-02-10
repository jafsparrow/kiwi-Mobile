"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customers_routing_1 = require("./customers.routing");
// components.
var customer_list_component_1 = require("./customer-list/customer-list.component");
var customer_detail_component_1 = require("./customer-detail/customer-detail.component");
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        core_1.NgModule({
            imports: [
                customers_routing_1.CustomerRoutingModule
            ],
            exports: [],
            declarations: [
                customer_list_component_1.CustomerListComponent,
                customer_detail_component_1.CustomerDetailComponent
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QseURBQTJEO0FBQzNELGNBQWM7QUFDZCxtRkFBK0U7QUFDL0UseUZBQXFGO0FBa0JyRjtJQUFBO0lBR0EsQ0FBQztJQUhZLGVBQWU7UUFoQjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx5Q0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUUsRUFFUjtZQUNELFlBQVksRUFBRTtnQkFDViwrQ0FBcUI7Z0JBQ3JCLG1EQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRSxFQUVWO1lBQ0QsT0FBTyxFQUFFLENBQUUsdUJBQWdCLENBQUM7U0FDL0IsQ0FBQztPQUNXLGVBQWUsQ0FHM0I7SUFBRCxzQkFBQztDQUFBLEFBSEQsSUFHQztBQUhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21lclJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2N1c3RvbWVycy5yb3V0aW5nXCI7XHJcbi8vIGNvbXBvbmVudHMuXHJcbmltcG9ydCB7Q3VzdG9tZXJMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tZXItbGlzdC9jdXN0b21lci1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdXN0b21lckRldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ3VzdG9tZXJSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG5cclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDdXN0b21lckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogWyBOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzTW9kdWxlIHtcclxuXHJcblxyXG59Il19