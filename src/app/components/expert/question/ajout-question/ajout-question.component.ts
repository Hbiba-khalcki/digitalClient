import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-ajout-question',
  templateUrl: './ajout-question.component.html',
  styleUrls: ['./ajout-question.component.css']
})
export class AjoutQuestionComponent implements OnInit {
  questionFormGroup: FormGroup;
  submitted: boolean = false;
  axes: Axe[] = [];


  constructor(private questionService: QuestionService,
    private fb: FormBuilder,
    private router: Router,
    private axeService: AxeService,
  ) { }

  ngOnInit(): void {

    this.axeService.getAllAxes().subscribe(data => {
      this.axes = data;
    }, err => {
      console.log(err);
    }),

    this.questionFormGroup = this.fb.group({
        contenu: ["", Validators.required],
        pourcentage: ["", Validators.required],
        axe: ["test", Validators.required],
        nbrReponse: ["", Validators.required],
    });

  }
  onSaveQuestions() {
    this.submitted = true;
    if (this.questionFormGroup?.invalid) return;
    this.questionService.saveQuestion(this.questionFormGroup?.value).subscribe((data: any) => {
      console.log("question_id", data)
      alert("succes save")
      this.router.navigate(["/AjoutRep", data.id])
    });
  }




  /*onGetAllAxes(){
     this.axes=this.axeService.getAllAxes().pipe(
      map(data=> ({ dataState: DataStateEnum.LOADED,data:data })),
      startWith({dataState:  DataStateEnum.LOADING}),
       catchError(err=> of({dataState:  DataStateEnum.ERROR,errorMessage:err.message}))
     );
   }*/

}
