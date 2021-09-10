import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AxeService } from 'src/app/services/axe.service';

@Component({
  selector: 'app-modif-axe',
  templateUrl: './modif-axe.component.html',
  styleUrls: ['./modif-axe.component.css']
})
export class ModifAxeComponent implements OnInit {

  axetId:string;
  axeFormGroup?:FormGroup;
  private submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private axeService:AxeService,
              private fb:FormBuilder) { 
    this.axetId= activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.axeService.getAxe(this.axetId)
    .subscribe(axe =>{
      this.axeFormGroup= this.fb.group({
          id:[axe.id,Validators.required],
          nameAxe:[axe.nameAxe,Validators.required],
          degreImportance:[axe.degreImportance,Validators.required],
        
        });
      })
  }
  onUpdateAxe(){
    this.axeService.updateAxe(this.axeFormGroup?.value)
    .subscribe(data=>{
      alert("update success");
    });
  }
}