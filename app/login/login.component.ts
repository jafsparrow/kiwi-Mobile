import { Component} from '@angular/core';
import { Page} from 'ui/page'
import { User} from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    input = {}
    user: User;
    isLoggingIn = true;
    isAuthenticating = false;

    constructor(private page: Page,
                private authService: AuthService,
                private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "test@test.com";
        this.user.password = "jafrose";
    }

    submit() {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
          this.login();
        } else {
          this.signUp();
        }
      }

      login() {
        this.authService.login(this.user)
         .then((res) => {
           this.isAuthenticating = false;
           if(res) {
                  this.routerExtensions.navigate(["/"], { clearHistory: true } );
           }
   
         })
         .catch((message:any) => {
           this.isAuthenticating = false;
         });
     }
   
     signUp() {
       this.authService.register(this.user)
         .then(() => {
           this.isAuthenticating = false;
           this.toggleDisplay();
         })
         .catch((message:any) => {
           alert(message);
           this.isAuthenticating = false;
         });
     }

     toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
      }
}