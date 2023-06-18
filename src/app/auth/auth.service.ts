import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from './auth/Auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean= false;
  isLoading:boolean=false;
  constructor(private router: Router) { }
  passwordMatched:boolean= true;

  login(form: LoginForm){

    if(this.isLoading) return;// no login
    this.isLoading=true;
    const auth = getAuth();
    
    
signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    
    // Signed in 
    this.isAuthenticated=true;
    
    this.router.navigate(['']);// navigation to bookcomponent
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Your Informations do not match our record');
    this.isAuthenticated=false;
    this.isLoading=false;
  }).
  finally(()=> (this.isAuthenticated  =false));
  
  ;
  

  }

  register(form: RegisterForm){
    if(form.password != form.confirmpassword){
      this.passwordMatched=false;
      this.isLoading=false;
      return;// we do no authentification if the  password and confirm password doesn't match

    }
   
    this.isLoading=true;
    const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
 
    this.isAuthenticated=true;
    this.router.navigate(['']);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated=false;
    alert('User Information already available or wrong');
    // ..
  });
  }

  getAuthenticated(): boolean{

    return this.isAuthenticated;
  }
  getLoading(): boolean{
    return this.isLoading;
  }

  logout(){
    const auth = getAuth();
    this.isAuthenticated=false;
    this.isLoading=false;
signOut(auth).then(() => {
  // Sign-out successful.
  this.router.navigate(['login']);// login page
}).catch((error) => {
  // An error happened.
});

  }
}
