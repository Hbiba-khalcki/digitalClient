import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';
import { RessourceService } from 'src/app/services/ressource.service';


@Component({
  selector: 'app-ajout-ressource',
  templateUrl: './ajout-ressource.component.html',
  styleUrls: ['./ajout-ressource.component.css']
})
export class AjoutRessourceComponent implements OnInit {

   ressourceFormGroup:FormGroup;
  submitted:boolean=false;
  axes:Axe[] = [];
  
  constructor(
    private ressourceService: RessourceService,
    private fb: FormBuilder,
    private router: Router,
    private axeService: AxeService,
  ) { }

  ngOnInit(): void {

    this.axeService.getAllAxes().subscribe(data => {
      this.axes = data;
    }, err => {
      console.log(err);
    }),

    this.ressourceFormGroup = this.fb.group({
        nom: ["", Validators.required],
        secteur: ["", Validators.required],
        entite: ["", Validators.required],
        lien: ["", Validators.required],
        ref_document: ["", Validators.required],
        axe: ["test", Validators.required],
    });

  }

  onSaveRessources() {
    this.submitted = true;
    if (this.ressourceFormGroup?.invalid) return;
    this.ressourceService.saveRessource(this.ressourceFormGroup?.value).subscribe((data: any) => {
      console.log("ressource_id", data)
      alert("succes save")
      this.router.navigate(["/reponse", data.id])
    });
  }
}
