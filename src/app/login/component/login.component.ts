import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({selector: 'app-login', templateUrl: 'login.component.html', styleUrls: ['login.component.scss']})
export class LoginComponent {
  username: any;
  password: any;
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder) {
  }

  login() {
    debugger;
    console.log('foi');
  }
}
