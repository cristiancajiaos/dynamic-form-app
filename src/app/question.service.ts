import { DropdownQuestion } from './dropdown-question';
import { QuestionBase } from './question-base';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getQuestions() {
    let questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good',  value: 'Good'},
          {key: 'unproven', value:'Unproven'}
        ],
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
