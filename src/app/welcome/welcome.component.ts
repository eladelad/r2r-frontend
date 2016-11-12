import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'r2r-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private termsAccepted:Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  readTerms(){
    this.termsAccepted = true;
  }

  user = {
    username: '',
    email: '',
    name: ''
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['questions'])
  }

}
