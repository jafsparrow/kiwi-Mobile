import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import { ProductsRoutingModule } from "./products.routing";
import { CommonModule } from '@angular/common';


import { ProductsListComponent } from "./prodcuts-list.component";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";



@NgModule({
    imports: [
        ProductsRoutingModule,
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        CommonModule
    ],
    declarations: [
        ProductsListComponent,
    ],
    // entryComponents: [ModalComponent, ProductDetailComponent],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class ProductsModule { }
