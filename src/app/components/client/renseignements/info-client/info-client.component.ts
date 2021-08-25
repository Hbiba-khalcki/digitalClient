import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    roleentrp: null,
  };

  isSuccessful = false;

  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((res: any) => {
      this.form.nom = res.nom ? res.nom : '';
      this.form.prenom = res.prenom ? res.prenom : '';
      this.form.roleentrp = res.roleentrp ? res.roleentrp : '';
    });
  }

  onUpdateProfil(): void {
    const {nom, prenom, roleentrp} = this.form;
    this.authService.updateProfil(nom, prenom, roleentrp).subscribe(
      data => {
        this.isSuccessful = true;

      },

      err => {
        this.errorMessage = err.error.message;

      }); 
      this.router.navigateByUrl("/straLead");


  }

}

