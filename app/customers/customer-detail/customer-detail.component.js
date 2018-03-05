"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(router) {
        this.router = router;
    }
    CustomerDetailComponent.prototype.navigateBack = function () {
        this.router.backToPreviousPage();
    };
    CustomerDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-customer-detail",
            moduleId: module.id,
            templateUrl: "./customer-detail.component.html",
            styleUrls: ["./customer-detail.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbUZBQWlGO0FBV2pGO0lBRUksaUNBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRTVDLENBQUM7SUFHRCw4Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFUUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxvQkFBb0I7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzt5Q0FHOEIsb0NBQWdCO09BRm5DLHVCQUF1QixDQVVuQztJQUFELDhCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJucy1jdXN0b21lci1kZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5hdmlnYXRlQmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufSJdfQ==