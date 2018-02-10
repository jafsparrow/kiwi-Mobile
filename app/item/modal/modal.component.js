"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(params) {
        this.params = params;
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
        this.product = params.context;
    }
    ModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "my-modal",
            moduleId: module.id,
            templateUrl: "./modal.component.html",
            styleUrls: ["./modal.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQVE1RTtJQUtJLHdCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsY0FBYztZQUNkLFNBQVM7WUFDVCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGNBQWM7U0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRU0sOEJBQUssR0FBWixVQUFhLEdBQVc7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWxCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBRSx1QkFBdUIsQ0FBQztTQUN4QyxDQUFDO3lDQU1xQywyQkFBaUI7T0FMM0MsY0FBYyxDQW9CMUI7SUFBRCxxQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LW1vZGFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbIFwiLi9tb2RhbC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwdWJsaWMgcHJvZHVjdDogYW55O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmZyYW1ld29ya3MgPSBbXHJcbiAgICAgICAgICAgIFwiTmF0aXZlU2NyaXB0XCIsXHJcbiAgICAgICAgICAgIFwiWGFtYXJpblwiLFxyXG4gICAgICAgICAgICBcIk9uc2VuIFVJXCIsXHJcbiAgICAgICAgICAgIFwiSW9uaWMgRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgIFwiUmVhY3QgTmF0aXZlXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHBhcmFtcy5jb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgIH1cclxuXHJcbn0iXX0=