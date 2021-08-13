import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css'],
})
export class ReponsesComponent implements OnInit {
  nb_reps: number = 3;
  id: string;
  numbers: any;
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}
 
  ngOnInit(): void {
    const that = this; //pour garder l'objet ReponsesComponent
    this.route.params.subscribe((params) => {
      this.questionService.getQuestion(params['id']).subscribe((data: any) => {
        console.log("question:",data)
        that.id = data.id;
        that.nb_reps = data.nbrReponse;
        this.numbers = Array(data.nbrReponse)
          .fill(0)
          .map((x, i) => i);
        console.log(this.numbers);
      });
    });
  }
}
