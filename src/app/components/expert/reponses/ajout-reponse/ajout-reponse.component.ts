import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reponse } from 'src/app/models/reponse.model';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-ajout-reponse',
  templateUrl: './ajout-reponse.component.html',
  styleUrls: ['./ajout-reponse.component.css'],
})
export class AjoutReponseComponent implements OnInit {
  nb_reps: number = 0;
  id: string;
  numbers: any;
  reponses: Reponse[];
  submitted: boolean = false;
  qstId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reponService: ReponseService,
    private questionService: QuestionService,
    private reponseService: ReponseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.qstId = params['id'];
      this.questionService.getQuestion(params['id']).subscribe((data: any) => {
        console.log('question:', data);
        this.id = data.id;
        this.nb_reps = data.nbrReponse;
        this.reponseService
          .getReponsesByQuestionId(this.id)
          .subscribe((reponses: Reponse[]) => {
            this.reponses = Array(data.nbrReponse)
              .fill(()=>{
                const r :Reponse ={
                  contenu: '',
                  pourcentage: null,
                  qstId: params['id'],
                };
                return r})
              .map((x, i) => {
                if (reponses[i]) return reponses[i];
              })
          });
      });
    });
  }

  onUpdateReponse() {
    console.log(this.reponses);
    this.submitted = true;
    this.reponService.saveReponse(this.reponses).subscribe((data) => {
      alert('succes save');
      this.router.navigateByUrl('/MenuAffichage');
    });
  }
}
