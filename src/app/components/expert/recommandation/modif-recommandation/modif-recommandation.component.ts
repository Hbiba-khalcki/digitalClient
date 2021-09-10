import { Component, OnInit } from '@angular/core';
import { RecommandationService } from 'src/app/services/recommandation.service';
import { Recommandation } from 'src/app/models/recommandation.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';

@Component({
  selector: 'app-modif-recommandation',
  templateUrl: './modif-recommandation.component.html',
  styleUrls: ['./modif-recommandation.component.css']
})
export class ModifRecommandationComponent implements OnInit {


  recId:string;
 recFormGroup?:FormGroup;
  private submitted:boolean=false;
  axes: Axe[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private recService:RecommandationService,
              private fb:FormBuilder,
              private axeService:AxeService) { 
    this.recId= activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.recService.getRecommandation(this.recId)
    .subscribe(rec =>{
      this.recFormGroup= this.fb.group({
          id:[rec.id,Validators.required],
          priorite:[rec.priorite,Validators.required],
          axe:[rec.axe,Validators.required],
          contenu:[rec.contenu,Validators.required],
          reference:[rec.reference,Validators.required],
        
        });
        this.axeService.getAllAxes().subscribe(data=>{
          this.axes = data;
        })
      })
  }
  onUpdateRecommandation(){
    this.recService.updateRecommandation(this.recFormGroup?.value)
    .subscribe(data=>{
      alert("update success");
    });
  }
  

  
 
  

  
  
  

}
