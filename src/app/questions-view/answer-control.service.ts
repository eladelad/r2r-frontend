import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import {AnswerInput} from "./question";


@Injectable()
export class AnswerControlService {

  constructor() { }

  toFormGroup(answers: AnswerInput[] ) {
    let group: any = {};

    answers.forEach(answer => {
      group[answer.key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

}
