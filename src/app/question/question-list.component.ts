import { Component, OnInit } from '@angular/core';
import { Question } from './question.module';
import { QuestionService } from './question.service';

// const q = new Question(
//     'Como reutilizo un componente en Android?',
//     'Miren, esta es mi pregunta....',
//     new Date(),
//     'none'
// );
@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
        i{font-size: 48px;}
        i.help{
            width:48px !important;
            padding: 0 !important;
            font-size: 48px !important;
        }

        .add-question{
            position:fixed;
            bottom:30px;
            right:30px;
            font-size: 24px;
        }
    `],
    providers: [QuestionService]
})

export class QuestionListComponent implements OnInit{
    constructor(private questionService: QuestionService){}
    questions: Question[];
    loading = true;

    ngOnInit(){
        this.questionService
            .getQuestions()
            .then((questions: Question[]) => {
                this.questions = questions;
                this.loading = false;
                
            });

            
    }
}