import { Component, OnInit } from '@angular/core';
import { RecommandationService } from 'src/app/services/recommandation.service';
import { Recommandation } from 'src/app/models/recommandation.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-recommandation',
  templateUrl: './modif-recommandation.component.html',
  styleUrls: ['./modif-recommandation.component.css']
})
export class ModifRecommandationComponent implements OnInit {

  public errorMessage: string = '';
  public recommandation: Recommandation;
  public recommandationForm: FormGroup;
  constructor(
    private repository: RecommandationService,  private router: Router,
    private activeRoute: ActivatedRoute) 
    { }

  ngOnInit() {
    this.recommandationForm = new FormGroup({
      contenu: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      priorite: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
    this.getrecommandationById();
  }
  private getrecommandationById = () => {
    let recommandationId: string = this.activeRoute.snapshot.params['id'];

    let recommandationByIdUrl: string = `${recommandationId}`;

    this.repository.getRecommandation(recommandationByIdUrl)
      .subscribe(res => {
        console.log(res.id);
        this.recommandation = res as Recommandation;
        this.recommandationForm.patchValue(this.recommandation);
      },
        (error) => {
        })
  }
  public validateControl = (controlName: string) => {
    if (this.recommandationForm.controls[controlName].invalid && this.recommandationForm.controls[controlName].touched)
      return true;
  
    return false;
  }
  
  public hasError = (controlName: string, errorName: string)  => {
    if (this.recommandationForm.controls[controlName].hasError(errorName))
      return true;
    return false;
  }
 
  public redirectTorecommandationList = () => {
    this.router.navigate(['/recommandation/list']);
  }

  public updateRecommandation = (recommandationFormValue) => {
    if (this.recommandationForm.valid) {
      this.executeRecommandationFormValueUpdate(recommandationFormValue);
    }
  }
  
  private executeRecommandationFormValueUpdate = (recommandationFormValue) => {
    this.recommandation.contenu = recommandationFormValue.contenu;
    this.recommandation.pourcentage = recommandationFormValue.priorite;
  
  
  }

}
