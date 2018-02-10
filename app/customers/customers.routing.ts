import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// components.
import {CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailComponent} from "./customer-detail/customer-detail.component";


const routes: Routes = [
    { path: "", redirectTo: "/customers", pathMatch: "full" },
    { path: "customers", component: CustomerListComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CustomerRoutingModule { }