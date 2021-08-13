import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css'],
})
export class ReponsesComponent implements OnInit {
  nb_reps: number = 0;
  id: string;
  numbers: any;
  reponseFormGroup:FormGroup;
  submitted:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private reponService: ReponseService,
    private questionService : QuestionService, 
    private fb: FormBuilder,
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
    this.reponseFormGroup=this.fb.group({
      contenu:["",Validators.required],
      pourcentage:["",Validators.required],
     
  });
  
  }


  onSaveReponse(){
    this.submitted=true;
    if(this.reponseFormGroup?.invalid) return;
    this.questionService.saveQuestion(this.reponseFormGroup?.value).subscribe(data=>{
      alert("succes save") 
      this.router.navigateByUrl("/recommandation")
    });
  }


}
