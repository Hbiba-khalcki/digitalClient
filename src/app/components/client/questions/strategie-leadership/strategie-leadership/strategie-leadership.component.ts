import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { ReponseClient } from 'src/app/models/reponseClient.model';
import { AxeService } from 'src/app/services/axe.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import { ReponseClientService } from 'src/app/services/reponseclient.service';

@Component({
  selector: 'app-strategie-leadership',
  templateUrl: './strategie-leadership.component.html',
  styleUrls: ['./strategie-leadership.component.css'],
})
export class StrategieLeadershipComponent implements OnInit {
  question: any = {
    contenu: 'string',
    pourcentage: '',
    nbrReponse: 0,
  };
  reponses: any = [];
  total: number;
  axe: string="";
  axecount:number;
  order: number;
  clientreponse: ReponseClient = {
    idQuestion: '',
    idReponse: '',
  };
  topic_img = './assets/images/Quest/quest5.PNG';
  constructor(
    private qstService: QuestionService,
    private axeService: AxeService,
    private reponseService: ReponseService,
    private reponseClientService: ReponseClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      // get all questions
      this.qstService.getAllQuestions().subscribe((data: any) => {
        // nbr de questions
        this.total = data.length;
        // order = numero de question 
        this.order = parseInt(params['order']);
        this.question = data[parseInt(params['order']) - 1];
        if (this.question.axe) {
          this.axe = this.question.axe.nameAxe.toLowerCase();
          // get deg dimp d'axe
          this.axecount = this.question.axe.degreImportance;
          switch (this.axe) {
            case 'strategie leadership':
              this.topic_img = './assets/images/Quest/quest1.png';
              break;
            case 'technologies services':
              this.topic_img = './assets/images/Quest/quest2.PNG';
              break;
            case 'operation processus':
              this.topic_img = './assets/images/Quest/quest3.PNG';
              break;
            case 'infrastructure informatique':
              this.topic_img = './assets/images/Quest/quest4.PNG';
              break;
            case 'culture informatique':
              this.topic_img = './assets/images/Quest/quest5.PNG';
              break;
            default:
              this.topic_img = './assets/images/Quest/quest5.PNG';
              break;
          }
        }
        this.clientreponse.idQuestion = this.question.id;
        // get question reponses
        this.reponseService
          .getReponsesByQuestionId(this.question.id)
          .subscribe((reponses) => {
            this.reponses = reponses;
            this.reponseClientService
              .getByIdUserAndIdQuestion(this.question.id)
              .subscribe((repcl) => {
                if (repcl) {
                  this.clientreponse = repcl;
                }
              });
          });
      });
    });
  }
  // save client reponse 
  onSubmit() {
    this.reponseClientService
      .save(this.clientreponse, this.question.id)
      .subscribe((data) => {
        console.log(">>> ",this.order,"==" , this.total, " is ", this.order == this.total)
        if (this.order == this.total) {
          this.router.navigateByUrl('/infoentrp');
        } else {
          this.router.navigate(['questions', this.order + 1]);
          this.ngOnInit();
        }
      });
  }
  onBack() {
    if (this.order == 1) {
      this.router.navigateByUrl('/infoclient');
    } else {
      this.router.navigate(['questions', this.order - 1]);
      this.ngOnInit();
    }
  }
}
