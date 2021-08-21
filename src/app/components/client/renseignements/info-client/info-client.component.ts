import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    roleEntr: null, 
  };

  isSuccessful = false;

  errorMessage = '';
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

 /* onUpdateProfil():void{
    const {nom, prenom, roleEntr} = this.form;
    this.authService.updateProfil(nom, prenom, roleEntr).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        
      },
  
    err => {
      this.errorMessage = err.error.message;
 
    } );
    //this.router.navigateByUrl("/straLead");

 

  }*/

}

