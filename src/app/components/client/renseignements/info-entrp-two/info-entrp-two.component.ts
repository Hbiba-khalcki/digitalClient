import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-info-entrp-two',
  templateUrl: './info-entrp-two.component.html',
  styleUrls: ['./info-entrp-two.component.css']
})
export class InfoEntrpTwoComponent implements OnInit { 

  entrFormGroup:FormGroup;
  submitted:boolean=false;

  constructor(private router:Router,
             private fb:FormBuilder,
              private entrepriseService: EntrepriseService,
    )
   {}

  ngOnInit(): void {
  
    this.entrFormGroup= this.fb.group({
      type:["",Validators.required],
      familie_ent:["",Validators.required],
      annee_const:["",Validators.required],
      stade_developpement:["",Validators.required],
      nb_employe:[Validators.required],
      revenu:["",Validators.required],
  })
}
  onSaveEntreprise(){
    this.submitted=true;
    if(this.entrFormGroup?.invalid) return;
    console.log("",this.entrFormGroup?.value)
    this.entrepriseService.saveEntreprise(this.entrFormGroup?.value).subscribe(date => {
      alert("succes save")
      this.router.navigateByUrl("/score")
    })
 
}

}
