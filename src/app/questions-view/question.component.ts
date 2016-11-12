import { Component, OnInit } from '@angular/core';
import {QuestionService} from "./question.service";
import {Question, AnswerInput} from "./question";
import {NgForm, FormGroup, Validators, FormControl} from "@angular/forms";
import {AnswerControlService} from "./answer-control.service";

@Component({
  selector: 'r2r-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  private form: FormGroup;
  private currentQuestion: Question;
  constructor(private questionService: QuestionService, private answerControlService: AnswerControlService) { }

  ngOnInit() {
    var token = 'test token';
    this.currentQuestion = this.questionService.getNextQuestion(token);
    this.form = this.answerControlService.toFormGroup(this.currentQuestion.inputs);

  }

  onSubmit() {
    console.log(this.form.value);
  }

}
