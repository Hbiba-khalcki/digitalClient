import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExpertService } from 'src/app/components/services/expert.service';

@Component({
  selector: 'app-expert-create',
  templateUrl: './expert-create.component.html',
  styleUrls: ['./expert-create.component.css']
})

export class ExpertCreateComponent implements OnInit {
  expert = {
    contenu: '',
    priorite: '',
    reference: '',
  };
  submitted = false;

  public expertForm: FormGroup;

  constructor(private expertService: ExpertService) { }

  ngOnInit(): void {
  }
  
  saveExpert(): void {
    const data = {
      contenu: this.expert.contenu,
      priorite: this.expert.priorite,
      reference: this.expert.reference
    };

    this.expertService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newExpert(): void {
    this.submitted = false;
    this.expert = {
     contenu: '',
     priorite: '',
     reference: '',
    };
  }


}
