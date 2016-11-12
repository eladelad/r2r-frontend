import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { TriviaBotComponent } from "./trivia-bot/trivia-bot.component";
import {QuestionsViewComponent} from "./questions-view/questions-view.component";
import {CodingComponent} from "./coding/coding.component";
import {HallOfFameComponent} from "./hall-of-fame/hall-of-fame.component";

// import { HomeComponent } from "./home-component.component";
// import { USER_ROUTES } from "./user/user.routes";

const APP_ROUTES: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'trivia', component: TriviaBotComponent },
  { path: 'coding', component: CodingComponent },
  { path: 'hof', component: HallOfFameComponent },
  { path: 'questions', component: QuestionsViewComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
