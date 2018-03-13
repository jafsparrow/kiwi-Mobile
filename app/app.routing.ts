import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// import { ProductsListComponent} from "./products/prodcuts-list.component";
// import { ProductDetailComponent} from "./products/product-detail/product-detail.component";
import { HomeComponent} from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "home", component: HomeComponent, canActivate: [AuthGuard]}, //HomeCompoent
    { path: "products", loadChildren: "./products/products.module#ProductsModule" },
    // { path: "product/:id", component: ProductDetailComponent, canActivate: [AuthGuard] },
    { path: "order", component: OrderComponent, canActivate: [AuthGuard]},
    { path: "customers", loadChildren: "./customers/customers.module#CustomersModule", canActivate: [AuthGuard]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }