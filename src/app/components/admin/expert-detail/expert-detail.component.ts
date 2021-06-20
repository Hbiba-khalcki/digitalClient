import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Expert{
  id: string;
  name: string;
  dateOfBirth: Date;
  address: string;
}

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.css']
})
export class ExpertDetailComponent implements OnInit {

  @Input() public expert: Expert;
  public selectOptions = [{name:'Show', value: 'show'}, {name: `Don't Show`, value: ''}];
  @Output() selectEmitt = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }

  public redirectToOwnerList = () => {
  }

}
