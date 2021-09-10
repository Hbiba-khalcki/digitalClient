import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-modif-question',
  templateUrl: './modif-question.component.html',
  styleUrls: ['./modif-question.component.css']
})
export class ModifQuestionComponent implements OnInit {


  questionId:string;
  qstFormGroup?:FormGroup;
  private submitted:boolean=false;
  axes: Axe[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private qstService:QuestionService,
              private fb:FormBuilder,
              private axeService:AxeService) { 
    this.questionId= activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.qstService.getQuestion(this.questionId)
    .subscribe(qst =>{
      this.qstFormGroup= this.fb.group({
          id:[qst.id,Validators.required],
          contenu:[qst.contenu,Validators.required],
          pourcentage:[qst.pourcentage,Validators.required],
          axe:[qst.axe,Validators.required],
          nbrReponse:[qst.nbrReponse,Validators.required],
        
        });
        this.axeService.getAllAxes().subscribe(data=>{
          this.axes = data;
        })
      })
  }
  onUpdateQuestion(){
    this.qstService.updateQuestion(this.qstFormGroup?.value)
    .subscribe(data=>{
      alert("update success");
    });
  }

}
