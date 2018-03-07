
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "./item/modal/modal.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent} from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

import { CartService } from "./shared/services/car.service";
import { ProductService } from "./shared/services/product.service";
import { ProductDetailComponent } from "./item/product/product.component";
import { LoginComponent } from "./login/login.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthService } from "./shared/services/auth.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        ModalComponent,
        HomeComponent,
        OrderComponent,
        ProductDetailComponent,
        LoginComponent
    ],
    entryComponents: [ModalComponent, ProductDetailComponent],
    providers: [
        ItemService,
        ModalDialogService,
        CartService,
        ProductService,
        AuthGuard,
        AuthService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
