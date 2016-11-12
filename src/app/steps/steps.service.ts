import { Injectable } from '@angular/core';
import {Step} from "./step";

@Injectable()
export class StepsService {
  private steps: Step[] = [
    new Step('Welcome!', 'list-group-item-success', 'welcome', 0),
    new Step('The Questions', 'list-group-item-info', 'questions', 0),
    new Step('Trivia Bot', 'list-group-item-info', 'trivia', 0),
    new Step('Coding Skills', 'list-group-item-info', 'coding', 0),
    new Step('Hall Of Fame', 'list-group-item-info', 'hof', 0),
  ];

  getSteps(){
    return this.steps;
  }



  constructor() { }

}
