import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


    constructor(private tokenStorageService: TokenStorageService) { }
  
    ngOnInit() {
     
    }
    // creer un fonction qui verifie la connection depuis token-storageService
    isAuthenticated(){
      return this.tokenStorageService.getToken() != null;
    }
}


