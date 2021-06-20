import { Component, OnInit,Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-axes-evaluation',
  templateUrl: './axes-evaluation.component.html',
  styleUrls: ['./axes-evaluation.component.css'],

  host: {
    'class': 'spinner-container'
  },
  inputs: ['color', 'diameter', 'mode', 'strokeWidth', 'value'],
})


export class AxesEvaluationComponent implements OnInit {
  @Input() color: ThemePalette;
  @Input() diameter: number;
  @Input() display: string | number;
  @Input() mode: ProgressSpinnerMode;
  @Input() strokeWidth: number;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
