import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerButton() {
    console.log('register button works')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
