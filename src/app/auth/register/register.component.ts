import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../auth/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authservice: AuthService){

  }

  form: RegisterForm  = {
    email:'',
  password: '',
  confirmpassword:''

  }
  passwordMatched:boolean= true;
  ngOnInit(): void {
    
  }

  submit(){// firebase 
    this.authservice.register(this.form);

    
  }
  getLoading(){
    return this.authservice.getLoading();
  }

}
