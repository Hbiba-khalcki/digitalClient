import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


interface Expert{
  id: string;
  name: string;
  dateOfBirth: Date;
  address: string;
}

@Component({
  selector: 'app-expert-edit',
  templateUrl: './expert-edit.component.html',
  styleUrls: ['./expert-edit.component.css']
})
export class ExpertEditComponent implements OnInit {

  public errorMessage: string = '';
  public expert: Expert;
  public expertForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.expertForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

    this.getExpertById();
  }

  private getExpertById = () => {
    let expertId: string = this.activeRoute.snapshot.params['id'];

    let expertByIdUrl: string = `api/expert/${expertId}`;


  }

  public validateControl = (controlName: string) => {
    if (this.expertForm.controls[controlName].invalid && this.expertForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.expertForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public executeDatePicker = (event) => {
    this.expertForm.patchValue({ 'dateOfBirth': event });
  }

  public redirectToExpertList = () => {
    /*this.router.navigate(['/expert/list']);*/
  }

  public updateExpert = (expertFormValue) => {
    if (this.expertForm.valid) {
      this.executeExpertUpdate(expertFormValue);
    }
  }

  private executeExpertUpdate = (expertFormValue) => {
    const date = new Date(expertFormValue.dateOfBirth);
    this.expert.name = expertFormValue.name;
    /*this.expert.dateOfBirth = this.datePipe.transform(date, "yyyy-MM-dd");*/
    this.expert.address = expertFormValue.address;

  }
  /*  
   import { ErrorHandlerService } from './../../shared/services/error-handler.service';
   import { RepositoryService } from './../../shared/services/repository.service';
   import { Owner } from './../../_interfaces/owner.model';
   import { DatePipe } from '@angular/common';
   
   constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router,
    private activeRoute: ActivatedRoute, private datePipe: DatePipe) { }
   constructor() { }

  ngOnInit(): void {
  }
  
   private getOwnerById = () => {
    let ownerId: string = this.activeRoute.snapshot.params['id'];

    let ownerByIdUrl: string = `api/owner/${ownerId}`;

    this.repository.getData(ownerByIdUrl)
      .subscribe(res => {
        this.owner = res as Owner;
        this.ownerForm.patchValue(this.owner);
        $('#dateOfBirth').val(this.datePipe.transform(this.owner.dateOfBirth, 'MM/dd/yyyy'));
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }
    private executeOwnerUpdate = (ownerFormValue) => {
    const date = new Date(ownerFormValue.dateOfBirth);
    this.owner.name = ownerFormValue.name;
    this.owner.dateOfBirth = this.datePipe.transform(date, "yyyy-MM-dd");
    this.owner.address = ownerFormValue.address;

    const apiUrl = `api/owner/${this.owner.id}`;
    this.repository.update(apiUrl, this.owner)
      .subscribe(res => {
        $('#successModal').modal();
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }
  */

}
