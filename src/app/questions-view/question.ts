export class Question {
  constructor(public id:string, public description:string, public inputs:AnswerInput[]){

  }
}

export class AnswerInput {
  constructor(public key: string, public text:string, public type:string){}
}
