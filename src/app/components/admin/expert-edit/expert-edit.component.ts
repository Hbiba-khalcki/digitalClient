import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ExpertService } from 'src/app/components/services/expert.service';

@Component({
  selector: 'app-expert-edit',
  templateUrl: './expert-edit.component.html',
  styleUrls: ['./expert-edit.component.css']
})
export class ExpertEditComponent implements OnInit {

  currentExpert = null;
  message = '';

  constructor(
    private expertService: ExpertService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getExpert(this.route.snapshot.paramMap.get('id'));
  }

  getExpert(id): void {
    this.expertService.get(id)
      .subscribe(
        data => {
          this.currentExpert = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateContenu(status): void {
    const data = {
      reference: this.currentExpert.reference,
      priorite: this.currentExpert.priorite,
      contenu: status
    };

    this.expertService.update(this.currentExpert.id, data)
      .subscribe(
        response => {
          this.currentExpert.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateExpert(): void {
    this.expertService.update(this.currentExpert.id, this.currentExpert)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Expert was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteExpert(): void {
    this.expertService.delete(this.currentExpert.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/list-exp']);
        },
        error => {
          console.log(error);
        });
  }

}
