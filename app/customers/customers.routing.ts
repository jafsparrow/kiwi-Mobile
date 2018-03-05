import { Routes } from "@angular/router";

// components.
import {CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailComponent} from "./customer-detail/customer-detail.component";


export const CustomerRoutes: Routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "list", component: CustomerListComponent},
    { path: "detail", component: CustomerDetailComponent}
];
