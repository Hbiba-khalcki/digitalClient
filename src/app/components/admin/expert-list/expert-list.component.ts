import { Component, OnInit } from '@angular/core';

import { ExpertService } from 'src/app/components/services/expert.service';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {

  experts: any;
  currentExpert = null;
  currentIndex = -1;
  contenu = '';

  constructor(private expertService: ExpertService) { }

  ngOnInit(): void {
    this.retrieveExperts();
  }

  retrieveExperts(): void {
    this.expertService.getAll()
      .subscribe(
        data => {
          this.experts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveExperts();
    this.currentExpert = null;
    this.currentIndex = -1;
  }

  setActiveExpert(expert, index): void {
    this.currentExpert = expert;
    this.currentIndex = index;
    
    console.log( "********");
    console.log( this.currentExpert._id);
    console.log( this.currentIndex);

    
  }

  removeAllExperts(): void {
    this.expertService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveExperts();
        },
        error => {
          console.log(error);
        });
  }

  searchContenu(): void {
    this.expertService.findByNom(this.contenu)
      .subscribe(
        data => {
          this.experts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

