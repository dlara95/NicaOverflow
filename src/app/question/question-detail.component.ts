import { Component } from '@angular/core';
import { Question } from './question.module';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent {
    question: Question = new Question(
        'Esta es una nueva pregunta sobre Android',
        'Miren, tengo una pinche dudas cabrones',
        new Date,
        'devicon-android-plain'
    );
}