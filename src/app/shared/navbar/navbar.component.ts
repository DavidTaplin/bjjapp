import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logIn() {
    console.log('Log In Works')
  }

  signUp() {
    console.log('sign up works')
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}

