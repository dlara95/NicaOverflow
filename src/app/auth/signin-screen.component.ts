import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signin-screen',
    templateUrl: './signin-screen.component.html'
})

export class SigninScreenComponent implements OnInit{
    signingForm: FormGroup;
    ngOnInit(){
        this.signingForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        if (this.signingForm.valid){
          const { email, password } =  this.signingForm.value;
          const user = new User(email, password);
          console.log(user);
        }
    }
}