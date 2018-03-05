import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CommonModule } from '@angular/common';

import { CustomerRoutes} from "./customers.routing";
// components.
import {CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailComponent} from "./customer-detail/customer-detail.component";

// services
import { CustomerService } from "./common/services/customer.service";
@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule.forChild(CustomerRoutes),
        CommonModule
    ],
    exports: [
        
    ],
    declarations: [
        CustomerListComponent,
        CustomerDetailComponent
    ],
    providers: [
        CustomerService
    ],
    schemas: [ NO_ERRORS_SCHEMA]
})
export class CustomersModule {


}