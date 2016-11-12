import { Component, OnInit } from '@angular/core';
import {QuestionService} from "./question.service";
import {FormGroup, FormBuilder, NgForm} from "@angular/forms";
import {AnswerControlService} from "./answer-control.service";


@Component({
  selector: 'r2r-questions-view',
  templateUrl: './questions-view.component.html',
  providers: [ QuestionService, AnswerControlService ],
  styleUrls: ['./questions-view.component.css']
})
export class QuestionsViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
