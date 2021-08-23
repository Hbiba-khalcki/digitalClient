import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { SharedEntrepriseService } from 'src/app/services/sharedEntreprise.service';

@Component({
  selector: 'app-info-entrp',
  templateUrl: './info-entrp.component.html',
  styleUrls: ['./info-entrp.component.css']
})
export class InfoEntrpComponent implements OnInit {
  entrFormGroup:FormGroup;
  submitted:boolean=false;
 


  constructor(private router:Router,
             private fb:FormBuilder,
              private entrepriseService: EntrepriseService,
    )
   {}
   

  ngOnInit(): void {
  
    this.entrFormGroup= this.fb.group({
      nom:["",Validators.required],
      siteWeb:["",Validators.required],
      adresse:["",Validators.required],
      secteurActivite:["",Validators.required],
  })
}
  onSaveEntreprise(){
    this.submitted=true;
    if(this.entrFormGroup?.invalid) return;
    this.entrepriseService.saveEntreprise(this.entrFormGroup?.value).subscribe(date => {
      alert("succes save")
      this.router.navigateByUrl("/infoentrptwo")
    })
 
}



}
