import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';
import { RecommandationService } from 'src/app/services/recommandation.service';


@Component({
  selector: 'app-ajout-recommandation',
  templateUrl: './ajout-recommandation.component.html',
  styleUrls: ['./ajout-recommandation.component.css']
})
export class AjoutRecommandationComponent implements OnInit {
  
  submitted:boolean=false;
  axes:Axe[] = [];
  recommandationFormGroup:FormGroup;


constructor(
            private fb: FormBuilder,
            private axeService: AxeService,
            private recommandationService: RecommandationService) { }

ngOnInit(): void {
  this.axeService.getAllAxes().subscribe(data=> {
    this.axes=data;
    },err=>{
      console.log(err);
    }),
  

  this.recommandationFormGroup=this.fb.group({
    contenu:["",Validators.required],
    priorite:["",Validators.required],
    axe:["",Validators.required],
    reference:["",Validators.required]
});
}
onSaveRecommandations(){
  this.submitted=true;
  if(this.recommandationFormGroup?.invalid) return;
  this.recommandationService.saveRecommandation(this.recommandationFormGroup?.value).subscribe(data=>{
    alert("succes save") 
    this.recommandationFormGroup.reset()
  });
}


}
