import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { AxeService } from 'src/app/services/axe.service';
import { ExpertService } from 'src/app/services/expert.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-axes-evaluation',
  templateUrl: './axes-evaluation.component.html',
  styleUrls: ['./axes-evaluation.component.css'],
  host: { class: 'spinner-container', },
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
    this.router.navigateByUrl("/resStr")
  }
  round2decimals(a: any) {
    return isNaN(a)?0:Math.round(a * 100) / 100;
  } 
  
generatepdf(){
  const doc = new jsPDF('p', 'px', 'a4');
  let html =`
  <html>
    <body>
        <h2 class="h2">rapport de maturite</h2>
        `
  html+=`
        <div class="row c1"><div class="title" >strategie et leadership </div><div class="percent">20%</div></div>
        <div class="row c2"><div class="title" >technologie et services </div><div class="percent">20%</div></div>
        <div class="row c3"><div class="title" >culture et innovation </div><div class="percent">20%</div></div>
        <div class="row c4"><div class="title" >operation et processus </div><div class="percent">20%</div></div>
        <div class="row c5"><div class="title" >infrastructure et information </div><div class="percent">20%</div></div>
        `
        
  html+=`
         <style>
             body{
                 margin:0;
                 padding: 0;
             }
             .title{
                display: inline;
                font-size:12px;
                width: 300px;
             }
             .h2{
               font-size:18px;
               text-align:center;
               width:500px
             }
             .row{
                  padding: 10px 20px;
                  width:400px;
                  color:#333;
                  height:30px;
             }
             .percent{
                 display: inline;
                 width: 100px;
                 font-size:10px;
             }
             .c1 ,.c3 ,.c5{
                 background-color: #ddd;
             }
             .c2 ,.c4 {
                 background-color: #bbb;
             }
             
         </style>
     </body>
</html>
`;
  doc.html(html,{margin:1,autoPaging:true}).then(()=>
    doc.save("rapport.pdf")
  )
}
}
