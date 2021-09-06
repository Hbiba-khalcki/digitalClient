import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Axe } from 'src/app/models/axe.model';
import { AxeService } from 'src/app/services/axe.service';

@Component({
  selector: 'app-ajout-axe',
  templateUrl: './ajout-axe.component.html',
  styleUrls: ['./ajout-axe.component.css']
})
export class AjoutAxeComponent implements OnInit {

   axeFormGroup: FormGroup;
  submitted: boolean = false;
  axes: Axe[] = [];

  constructor(private axeService: AxeService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.axeFormGroup = this.fb.group({
      nameAxe: ["", Validators.required],
      degreImportance: ["", Validators.required],
    });
  }

  onSaveAxe() {
    this.submitted = true;
    if (this.axeFormGroup?.invalid) return;
    this.axeService.saveAxe(this.axeFormGroup?.value).subscribe(data => {
      alert("succes save")
      this.router.navigateByUrl("/question")

    });

  }
  
  onGetAllAxes() {
    this.axeService.getAllAxes().subscribe(data => {
      this.axes = data;
    }, err => {
      console.log(err);
    })

  }

}
