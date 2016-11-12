import { Component } from '@angular/core';
import {StepsService} from "./steps/steps.service";

@Component({
  selector: 'r2r-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StepsService ]

})
export class AppComponent {
  title = 'r2r works!';
}
