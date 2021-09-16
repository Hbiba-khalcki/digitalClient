import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { AxeService } from 'src/app/services/axe.service';
import { ExpertService } from 'src/app/services/expert.service';

@Component({
  selector: 'app-axes-evaluation',
  templateUrl: './axes-evaluation.component.html',
  styleUrls: ['./axes-evaluation.component.css'],
  host: {
    class: 'spinner-container',
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
  totals: any;
  axes: any;
  constructor(
    private expertService: ExpertService,
    private axeService: AxeService, 
    private router:Router
  ) {}

  ngOnInit(): void {
    this.axeService.getAllAxes().subscribe((data) => {
      this.axes = data;
    });
    this.expertService.getoverall().subscribe((res: any) => {
      this.totals = res.totals;
    });
  }
  submit(){
    console.log(this.totals)
    console.log(this.axes)
    this.router.navigateByUrl("/resStr")
  }
  round2decimals(a: any) {
    return isNaN(a)?0:Math.round(a * 100) / 100;
  }
}
