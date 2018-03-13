"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var products_routing_1 = require("./products.routing");
var common_2 = require("@angular/common");
var prodcuts_list_component_1 = require("./prodcuts-list.component");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var ProductsModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [
                products_routing_1.ProductsRoutingModule,
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIListViewModule,
                common_2.CommonModule
            ],
            declarations: [
                prodcuts_list_component_1.ProductsListComponent,
            ],
            // entryComponents: [ModalComponent, ProductDetailComponent],
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUFxRTtBQUNyRSx1REFBMkQ7QUFDM0QsMENBQStDO0FBRy9DLHFFQUFrRTtBQUNsRSxnRUFBb0Y7QUF3QnBGO0lBSEE7O01BRUU7SUFDRjtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFwQjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBcUI7Z0JBQ3JCLGlDQUF3QjtnQkFDeEIsc0NBQTRCO2dCQUM1QixxQkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLCtDQUFxQjthQUN4QjtZQUNELDZEQUE2RDtZQUM3RCxTQUFTLEVBQUUsRUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUHJvZHVjdHNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcHJvZHVjdHMucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2RjdXRzLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUHJvZHVjdHNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICAvLyBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbENvbXBvbmVudCwgUHJvZHVjdERldGFpbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01vZHVsZSB7IH1cclxuIl19