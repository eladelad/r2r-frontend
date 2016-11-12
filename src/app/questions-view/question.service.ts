import { Injectable } from '@angular/core';
import {Question, AnswerInput} from "./question";

@Injectable()
export class QuestionService {

  private questions:Question[] = [
    new Question('test', 'This is a test questions', [
      new AnswerInput('first', 'what is ip?', 'text'),
      new AnswerInput('second', 'what is moshe', 'text')
    ]),
    new Question('second id', 'This is the second test', [
      new AnswerInput('first', 'Why is that?', 'text'),
      new AnswerInput('second', 'Why is it?', 'text'),
    ])
  ];
  constructor() { }

  getNextQuestion(token){
    console.log(token);
    return this.questions[1];
  }

}
