import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { QuestionComponent } from './questions-view/question.component';
import { TriviaBotComponent } from './trivia-bot/trivia-bot.component';
import { StepComponent } from './steps/step.component';
import { StepsListComponent } from './steps/steps-list.component';
import {routing} from "./app.routing";
import { CodingComponent } from './coding/coding.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AnswerInputComponent } from './questions-view/answer-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    WelcomeComponent,
    QuestionsViewComponent,
    QuestionComponent,
    TriviaBotComponent,
    StepComponent,
    StepsListComponent,
    CodingComponent,
    HallOfFameComponent,
    AnswerInputComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
