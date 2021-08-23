import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-entrp-two',
  templateUrl: './info-entrp-two.component.html',
  styleUrls: ['./info-entrp-two.component.css']
})
export class InfoEntrpTwoComponent implements OnInit {
  @Input('entreprise')
  entreprise: any;
  constructor() { }

  ngOnInit(): void {
  }

}
