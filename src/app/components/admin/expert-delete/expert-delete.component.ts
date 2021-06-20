import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';

interface Expert {
  id: string;
  name: string;
  dateOfBirth: Date;
  address: string;
}

@Component({
  selector: 'app-expert-delete',
  templateUrl: './expert-delete.component.html',
  styleUrls: ['./expert-delete.component.css']
})
export class ExpertDeleteComponent implements OnInit {

  public errorMessage: string = '';
  public expert: Expert;

  constructor() { }
  ngOnInit() {
    this.getExpertById();
  }

  private getExpertById = () => {



  }

  public redirectToExpertList = () => {
  }

  public deleteExpert = () => {
    const deleteUrl: string = `api/expert/${this.expert.id}`;


  }

  /* 
  import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from './../../shared/services/repository.service';
import { Owner } from './../../_interfaces/owner.model';
  
  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router,
  private activeRoute: ActivatedRoute) { }
 

  ngOnInit(): void {
  }
  private getOwnerById = () => {
    const ownerId: string = this.activeRoute.snapshot.params['id'];
    const ownerByIdUrl: string = `api/owner/${ownerId}`;
   
    this.repository.getData(ownerByIdUrl)
      .subscribe(res => {
        this.owner = res as Owner;
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }
   
  public redirectToOwnerList = () => {
    this.router.navigate(['/owner/list']);
  }

  public deleteOwner = () => {
    const deleteUrl: string = `api/owner/${this.owner.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
        $('#successModal').modal();
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }
  */

}
