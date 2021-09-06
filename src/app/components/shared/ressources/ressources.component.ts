import { AxeService } from 'src/app/services/axe.service';
import { Ressource } from './../../../models/ressource.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RessourceService } from 'src/app/services/ressource.service';
import { Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {

  ressourceFormGroup:FormGroup;
  submitted:boolean=false;
  ressources:Ressource[] = [];
  axes:Axe[] = [];
  
  constructor(

    private fb: FormBuilder,
    private router:Router,
    private ressourceService: RessourceService,
    private axeService: AxeService) { }

  ngOnInit(): void {
    this.ressourceService.getAllRessources().subscribe(data=> {
      this.ressources=data;
      },err=>{
        console.log(err);
      }),
      this.ressourceFormGroup = this.fb.group({
        ressource: ["test", Validators.required],
    });

    this.axeService.getAllAxes().subscribe(data=> {
      this.axes=data;
      },err=>{
        console.log(err);
      }),
      this.ressourceFormGroup = this.fb.group({
        axe: ["test", Validators.required],
    });
  }
}


