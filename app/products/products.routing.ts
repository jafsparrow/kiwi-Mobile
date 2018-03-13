import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ProductsListComponent} from "./prodcuts-list.component";
// import { ProductDetailsComponent} from "./product-detail/product-detail.component";
import { AuthGuard } from "../shared/guards/auth.guard";

const ProductRoutes: Routes = [
    { path: "", redirectTo: "productlist", pathMatch: "full" },
    { path: "productlist", component: ProductsListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(ProductRoutes)],
    exports: [NativeScriptRouterModule]
})
export class ProductsRoutingModule { }