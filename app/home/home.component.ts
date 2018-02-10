import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})

export class HomeComponent {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}