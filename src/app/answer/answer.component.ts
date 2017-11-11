import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer, User } from './answer.model';
import { Question } from '../question/question.module';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent{
  @Input() question: Question;

  constructor() { }

  onSubmit(form: NgForm){
    console.log(form.value.description);
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User('Paula', 'Beccera')
    );
    this.question.answer.unshift(answer);
    form.reset();
  }

}
