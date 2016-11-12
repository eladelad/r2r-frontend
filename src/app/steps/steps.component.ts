import { Component, OnInit } from '@angular/core';
import {Step} from "./step";
import {StepsService} from "./steps.service";

@Component({
  selector: 'r2r-steps',
  templateUrl: './steps.component.html'
})
export class StepsComponent implements OnInit {
  private currentStep: Step;
  constructor() { }

  ngOnInit() {
  }

}
