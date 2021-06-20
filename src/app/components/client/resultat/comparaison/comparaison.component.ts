import { Component, OnInit } from '@angular/core';


import { ViewChild } from "@angular/core";
import * as ApexCharts from 'apexcharts';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})

export class ComparaisonComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
   
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Strategie Leadership", "Infrastcture et informations", "Opération et processus", "Technologie et service", "Culture et innovation"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }; 


    
  }
  ngOnInit(): void {

  }
}

/*    
export class ComparaisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */