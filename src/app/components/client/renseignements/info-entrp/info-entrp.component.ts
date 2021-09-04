import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-info-entrp',
  templateUrl: './info-entrp.component.html',
  styleUrls: ['./info-entrp.component.css']
})

export class InfoEntrpComponent implements OnInit {
  submitted:boolean=false;
  entreprise:any={
    nom:"",
    adresse:"",
    siteWeb:"",
    secteurActivite:""
  };


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
