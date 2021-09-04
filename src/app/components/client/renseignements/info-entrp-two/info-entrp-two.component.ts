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

  entreprise:any={
    type:"",
    familie_ent:"",
    annee_const:"",
    nb_employe:"",
    revenu:""
  };
  
  submitted:boolean=false;

  constructor(private router:Router,
           
              private entrepriseService: EntrepriseService,
    )
   {}
   ngOnInit(): void {
    this.entrepriseService.getEntreprise().subscribe((data:any)=>{
      this.entreprise = data;
    });

}
  onSaveEntreprise(){
    this.submitted=true;
    this.entrepriseService.saveEntreprise(this.entreprise).subscribe(date => {
      alert("succes save")
      this.router.navigateByUrl("/infoentrptwo")
    })
 
}

}
