import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {






  constructor() {


  }


  ngOnInit() {

    }


    // takes in the log in forms data and saves to local storage
    signIn(formObj: NgForm) {
      let data = { email: 'name@email.com', password: 'xyz123'}

      localStorage.setItem('login data', JSON.stringify(data));
      console.log('submitted',formObj)
    };


  }
