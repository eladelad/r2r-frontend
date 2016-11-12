import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Step} from "./step";
import {StepsService} from "./steps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'r2r-steps-list',
  templateUrl: './steps-list.component.html'
})
export class StepsListComponent implements OnInit {
  steps: Step[] = [];
  @Output() stepSelected = new EventEmitter<Step>();
  constructor(private stepService: StepsService, private router:Router) { }

  ngOnInit() {
    this.steps = this.stepService.getSteps();
  }

  onStepClick(step:Step){
    this.stepSelected.emit(step);
    this.router.navigate([step.routing]);
    console.log("Selected Step" + step);
  }


}
