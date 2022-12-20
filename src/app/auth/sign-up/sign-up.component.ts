import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerButton(formObj: NgForm) {
    let data = { email: 'name@email.com', password: 'xyz123'}

    localStorage.setItem('sign-up data', JSON.stringify(data));


    console.log('register button works',formObj)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
