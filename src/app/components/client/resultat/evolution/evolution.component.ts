import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';
import { ExpertService } from 'src/app/services/expert.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  totals:any;
  somme:number = 0;
  category:number = 0;
  axes:any;
  axe: Axe;
  ready:boolean = false
  constructor(private expertService: ExpertService,
              private axeService: AxeService, 
              private router:Router ) { }

  ngOnInit(): void {
    this.axeService.getAllAxes().subscribe((data) => {
      this.axes = data;
    });
    this.expertService.getoverall().subscribe((res: any) => {
      this.totals = res.totals;
      console.log(res.totals);
      console.log(Object.keys(res.totals).length);
      for(var i=0;i<Object.keys(res.totals).length;i++){
       this.somme += (res.totals[Object.keys(res.totals)[i]])/Object.keys(res.totals).length
       if(i==Object.keys(res.totals).length-1){
         console.log(this.somme)
          this.ready = true
          if (this.somme <=15){
            this.category = 1;
          } else if (this.somme <=36){
            this.category = 2;
          } else if (this.somme <=46){
            this.category = 3;
          } else {
            this.category = 4;
          } 
          console.log(this.category)
       }
      }
    });
  
  }
}
  
   


