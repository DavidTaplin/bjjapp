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


    // takes in the log in forms data and print to console
    signIn(formObj: NgForm) {
      console.log('submitted',formObj)
    };


  }
