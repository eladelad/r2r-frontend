import {Component, OnInit, Input} from '@angular/core';
import {AnswerInput} from "./question";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'r2r-answer-input',
  templateUrl: './answer-input.component.html'
})
export class AnswerInputComponent implements OnInit {
  @Input() answerInput: AnswerInput;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  get isValid() { return this.form.controls[this.answerInput.key].valid; }

}
