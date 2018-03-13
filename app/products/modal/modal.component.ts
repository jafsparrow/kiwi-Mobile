import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: "my-modal",
    moduleId: module.id,
    templateUrl: "./modal.component.html",
    styleUrls: [ "./modal.component.css"]
})
export class ModalComponent {

    public frameworks: Array<string>;
    public product: any;

    public constructor(private params: ModalDialogParams) {
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
        this.product = params.context;
    }

    public close(res: string) {
        this.params.closeCallback(res);
    }

}