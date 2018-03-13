"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import { ProductsListComponent} from "./products/prodcuts-list.component";
// import { ProductDetailComponent} from "./products/product-detail/product-detail.component";
var home_component_1 = require("./home/home.component");
var order_component_1 = require("./order/order.component");
var login_component_1 = require("./login/login.component");
var auth_guard_1 = require("./shared/guards/auth.guard");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "home", component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: "products", loadChildren: "./products/products.module#ProductsModule" },
    // { path: "product/:id", component: ProductDetailComponent, canActivate: [AuthGuard] },
    { path: "order", component: order_component_1.OrderComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: "customers", loadChildren: "./customers/customers.module#CustomersModule", canActivate: [auth_guard_1.AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsNkVBQTZFO0FBQzdFLDhGQUE4RjtBQUM5Rix3REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCx5REFBdUQ7QUFFdkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDM0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBQztJQUNuRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFO0lBQy9FLHdGQUF3RjtJQUN4RixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxFQUFDO0lBQ3JFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsOENBQThDLEVBQUUsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxFQUFDO0NBQy9HLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gaW1wb3J0IHsgUHJvZHVjdHNMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0cy9wcm9kY3V0cy1saXN0LmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgUHJvZHVjdERldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckNvbXBvbmVudCB9IGZyb20gXCIuL29yZGVyL29yZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL3NoYXJlZC9ndWFyZHMvYXV0aC5ndWFyZFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXX0sIC8vSG9tZUNvbXBvZW50XG4gICAgeyBwYXRoOiBcInByb2R1Y3RzXCIsIGxvYWRDaGlsZHJlbjogXCIuL3Byb2R1Y3RzL3Byb2R1Y3RzLm1vZHVsZSNQcm9kdWN0c01vZHVsZVwiIH0sXG4gICAgLy8geyBwYXRoOiBcInByb2R1Y3QvOmlkXCIsIGNvbXBvbmVudDogUHJvZHVjdERldGFpbENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcIm9yZGVyXCIsIGNvbXBvbmVudDogT3JkZXJDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXX0sXG4gICAgeyBwYXRoOiBcImN1c3RvbWVyc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9jdXN0b21lcnMvY3VzdG9tZXJzLm1vZHVsZSNDdXN0b21lcnNNb2R1bGVcIiwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=