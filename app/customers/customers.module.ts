import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CustomerRoutingModule} from "./customers.routing";
// components.
import {CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailComponent} from "./customer-detail/customer-detail.component";

@NgModule({
    imports: [
        CustomerRoutingModule
    ],
    exports: [

    ],
    declarations: [
        CustomerListComponent,
        CustomerDetailComponent
    ],
    providers: [

    ],
    schemas: [ NO_ERRORS_SCHEMA]
})
export class CustomersModule {


}