import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';
import { QuestionService } from 'src/app/services/question.service';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-modif-ressource',
  templateUrl: './modif-ressource.component.html',
  styleUrls: ['./modif-ressource.component.css']
})
export class ModifRessourceComponent implements OnInit {

 
  ressId:string;
  ressFormGroup?:FormGroup;
  private submitted:boolean=false;
  axes: Axe[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private ressService:RessourceService,
              private fb:FormBuilder,
              private axeService:AxeService) { 
    this.ressId= activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.ressService.getRessource(this.ressId)
    .subscribe(ressource =>{
      this.ressFormGroup= this.fb.group({
          id:[ressource.id,Validators.required],
          nom:[ressource.nom,Validators.required],
          lien:[ressource.lien,Validators.required],
          axe:[ressource.axe,Validators.required],
          ref_document:[ressource.ref_document,Validators.required],
          secteur:[ressource.secteur,Validators.required],
          entite:[ressource.entite,Validators.required],
        
        });
        this.axeService.getAllAxes().subscribe(data=>{
          this.axes = data;
        })
      })
  }
  onUpdateRessource(){
    this.ressService.updateRessource(this.ressFormGroup?.value)
    .subscribe(data=>{
      alert("update success");
    });
  }

}
