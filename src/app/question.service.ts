import { DropdownQuestion } from './dropdown-question';
import { QuestionBase } from './question-base';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TextboxQuestion } from './textbox-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good',  value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasto',
        required: true,
        placeholder: 'First Name',
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        placeholder: 'example@mail.com',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
