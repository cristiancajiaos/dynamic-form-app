import { QuestionService } from './question.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job Application for Heroes';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
    console.log(this.questions$);
  }
}
