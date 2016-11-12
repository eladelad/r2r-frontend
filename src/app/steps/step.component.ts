import {Component, OnInit, Input} from '@angular/core';
import {Step} from "./step";

@Component({
  selector: 'r2r-step',
  templateUrl: './step.component.html'
})
export class StepComponent implements OnInit {
  @Input() step:Step;

  constructor() { }

  ngOnInit() {
  }

}
