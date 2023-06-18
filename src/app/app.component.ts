import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor( private authservice: AuthService, private router: Router){

  }
  title = 'BookApp';

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated(): boolean{
    return this.authservice.getAuthenticated();
  }
  isLoading(){
    return this.authservice.getLoading();
  }

  logout(){
    this.authservice.logout();

  }
}
