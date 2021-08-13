import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})



export class FormulaireContactComponent implements OnInit {

  contact: { subject: string, email: string, message:string } = {
    subject: '',
    email: '',
    message: ''
  };  
  constructor(private contactService :ContactService) {}
  sendmsg(){
      this.contactService.sendemail(this.contact).subscribe(res=>{
        console.log("sent",this.contact,res)
      })
    
    }
  ngOnInit() {
  }


}
