import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(private loginService:LoginService){

   

  }

  
  ngOnInit(): void {
    
    firebase.initializeApp({

      apiKey: "AIzaSyB5OUA34P9TxEA4inNQR7AZ7hDbrQxJmsw",
      
      authDomain: "mis-clientes-a5e64.firebaseapp.com",


    });


  }

  estaLogueado(){

    return this.loginService.estaLogueado();

  }

  logout(){

    this.loginService.logout();

  }

  
  



}
