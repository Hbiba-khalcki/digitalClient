import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})

export class FormulaireContactComponent implements OnInit {
  contactFormGroup: FormGroup;
  submitted: boolean = false;
 
  constructor(private contactService :ContactService,
    private fb: FormBuilder,
    private router: Router,) {}
 
  ngOnInit() {
    this.contactFormGroup = this.fb.group({
      subject: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    });
  }
  sendmsg(){
    this.submitted = true;
    if (this.contactFormGroup?.invalid) return;
    this.contactService.sendemail(this.contactFormGroup?.value).subscribe(res=>{
      console.log("sent",this.contactFormGroup,res)
      this.contactFormGroup.reset();
    })
   

}
}
