import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

interface Axe {
  name: string;
}
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  axesControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  axes: Axe[] = [
    {name: 'Stratégie et leadership'},
    {name: 'Infrastructure informatique et de données'},
    {name: 'Opérations et processus'},
    {name: 'Technologies et services'},
    {name: 'Culture et innovation'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
