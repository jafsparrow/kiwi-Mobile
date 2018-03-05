"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var customers_routing_1 = require("./customers.routing");
// components.
var customer_list_component_1 = require("./customer-list/customer-list.component");
var customer_detail_component_1 = require("./customer-detail/customer-detail.component");
// services
var customer_service_1 = require("./common/services/customer.service");
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule.forChild(customers_routing_1.CustomerRoutes),
                common_1.CommonModule
            ],
            exports: [],
            declarations: [
                customer_list_component_1.CustomerListComponent,
                customer_detail_component_1.CustomerDetailComponent
            ],
            providers: [
                customer_service_1.CustomerService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdGQUE4RTtBQUM5RSwwQ0FBK0M7QUFFL0MseURBQW9EO0FBQ3BELGNBQWM7QUFDZCxtRkFBK0U7QUFDL0UseUZBQXFGO0FBRXJGLFdBQVc7QUFDWCx1RUFBcUU7QUFtQnJFO0lBQUE7SUFHQSxDQUFDO0lBSFksZUFBZTtRQWxCM0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLGtDQUFjLENBQUM7Z0JBQ2pELHFCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsRUFFUjtZQUNELFlBQVksRUFBRTtnQkFDViwrQ0FBcUI7Z0JBQ3JCLG1EQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRSxDQUFFLHVCQUFnQixDQUFDO1NBQy9CLENBQUM7T0FDVyxlQUFlLENBRzNCO0lBQUQsc0JBQUM7Q0FBQSxBQUhELElBR0M7QUFIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEN1c3RvbWVyUm91dGVzfSBmcm9tIFwiLi9jdXN0b21lcnMucm91dGluZ1wiO1xyXG4vLyBjb21wb25lbnRzLlxyXG5pbXBvcnQge0N1c3RvbWVyTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL2N1c3RvbWVyLWRldGFpbC9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG4vLyBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tIFwiLi9jb21tb24vc2VydmljZXMvY3VzdG9tZXIuc2VydmljZVwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQ3VzdG9tZXJSb3V0ZXMpLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDdXN0b21lckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDdXN0b21lclNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lcnNNb2R1bGUge1xyXG5cclxuXHJcbn0iXX0=