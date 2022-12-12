import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  signIn() {
    console.log('sign in button works')
  };

  forgotPassword() {
    console.log('forgot password works')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
