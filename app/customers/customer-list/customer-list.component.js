"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var customer_service_1 = require("../common/services/customer.service");
var CustomerListComponent = /** @class */ (function () {
    // @ViewChild("searchBar") SearchBar: ElementRef;
    function CustomerListComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        // this.customers = this.customerService.getItems();
        // this.customerService.getItems()
        //     .subscribe(res => {
        //         console.log('inside the subscribe area');
        //         console.log(res);
        // //     })
        this.customers = this.customerService.getItems();
        // console.log('inside animation');
        // let searchcontainer = <SearchBar>this.SearchBar.nativeElement;
        // searchcontainer.dismissSoftInput();
        // searchcontainer.animate({
        //     opacity: 0.5,
        //     duration: 3000
        // })
    };
    CustomerListComponent.prototype.navigate = function () {
        this.router.navigate(['/customers/detail']);
    };
    CustomerListComponent.prototype.navigateBack = function () {
        this.router.backToPreviousPage();
    };
    CustomerListComponent.prototype.onSubmit = function ($event) {
        console.log('search submitted');
    };
    CustomerListComponent.prototype.onClear = function () {
        console.log('search cleared');
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: "ns-customer-list",
            moduleId: module.id,
            templateUrl: "./customer-list.component.html",
            styleUrls: ["./customer-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            customer_service_1.CustomerService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b21lci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxtRkFBZ0Y7QUFFaEYsd0VBQXNFO0FBa0J0RTtJQUdJLGlEQUFpRDtJQUNqRCwrQkFBb0IsTUFBd0IsRUFDeEIsZUFBZ0M7UUFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRXBELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksb0RBQW9EO1FBQ3BELGtDQUFrQztRQUNsQywwQkFBMEI7UUFDMUIsb0RBQW9EO1FBQ3BELDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hELG1DQUFtQztRQUNuQyxpRUFBaUU7UUFDakUsc0NBQXNDO1FBQ3RDLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLEtBQUs7SUFFVCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCw0Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsTUFBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBekNRLHFCQUFxQjtRQVBqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLGtCQUFrQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQU04QixvQ0FBZ0I7WUFDUCxrQ0FBZTtPQUwzQyxxQkFBcUIsQ0EwQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9zZXJ2aWNlcy9jdXN0b21lci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IHNjYW4gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnMvc2NhblwiO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9ycy8vbWVyZ2VNYXBcIjtcclxuaW1wb3J0IHsgQ3VzdG9tZXJ9IGZyb20gXCIuLi9jb21tb24vbW9kZWxzL2N1c3RvbWVyXCI7XHJcbmltcG9ydCB7IGN1c3RvbWVycyB9IGZyb20gXCIuLi9jb21tb24vbW9kZWxzL2N1c3RvbWVycy5saXN0XCI7XHJcbi8vIG5hdGl2ZXNjcmlwdCBpbXBvcnRzXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndWkvc2VhcmNoLWJhcic7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtY3VzdG9tZXItbGlzdFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3VzdG9tZXItbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY3VzdG9tZXJzOiBBcnJheTxDdXN0b21lcj47XHJcbiAgICAvLyBAVmlld0NoaWxkKFwic2VhcmNoQmFyXCIpIFNlYXJjaEJhcjogRWxlbWVudFJlZjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyB0aGlzLmN1c3RvbWVycyA9IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEl0ZW1zKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0SXRlbXMoKVxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHRoZSBzdWJzY3JpYmUgYXJlYScpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvLyAvLyAgICAgfSlcclxuICAgICAgICB0aGlzLmN1c3RvbWVycyA9IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEl0ZW1zKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5zaWRlIGFuaW1hdGlvbicpO1xyXG4gICAgICAgIC8vIGxldCBzZWFyY2hjb250YWluZXIgPSA8U2VhcmNoQmFyPnRoaXMuU2VhcmNoQmFyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgLy8gc2VhcmNoY29udGFpbmVyLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgICAvLyBzZWFyY2hjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgLy8gICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICAvLyAgICAgZHVyYXRpb246IDMwMDBcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZSgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jdXN0b21lcnMvZGV0YWlsJ10pO1xyXG4gICAgfVxyXG4gICAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggc3VibWl0dGVkJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xlYXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaCBjbGVhcmVkJyk7XHJcbiAgICB9XHJcbn0iXX0=