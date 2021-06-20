import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

interface ExpertForCreation {
  name: string;
  dateOfBirth: Date;
  address: string;
}

@Component({
  selector: 'app-expert-create',
  templateUrl: './expert-create.component.html',
  styleUrls: ['./expert-create.component.css']
})


export class ExpertCreateComponent implements OnInit {

  public expertForm: FormGroup;

  constructor(private location: Location) { }

  ngOnInit() {
    this.expertForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.expertForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createExpert = (expertFormValue) => {
    if (this.expertForm.valid) {
      this.executeExpertCreation(expertFormValue);
    }
  }

  private executeExpertCreation = (expertFormValue) => {
    let expert: ExpertForCreation = {
      name: expertFormValue.name,
      dateOfBirth: expertFormValue.dateOfBirth,
      address: expertFormValue.address
    }
 
    
  }

  /*
  import { RepositoryService } from './../../shared/repository.service';
  import { OwnerForCreation } from '../../_interface/ownerForCreation.model';
  constructor() { }
  constructor(private location: Location, private repository: RepositoryService) { }
  ngOnInit(): void {
  }
  let apiUrl = 'api/owner';
    this.repository.create(apiUrl, owner)
      .subscribe(res => {
        //this is temporary, until we create our dialogs
        this.location.back();
      },
      (error => {
        //temporary as well
        this.location.back();
      })
    )
  */
}
