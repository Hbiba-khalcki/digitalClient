import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RessourceService } from 'src/app/services/ressource.service';
import { Ressource } from 'src/app/models/ressource.model';

@Component({
  selector: 'app-liste-ressource',
  templateUrl: './liste-ressource.component.html',
  styleUrls: ['./liste-ressource.component.css']
})
export class ListeRessourceComponent implements OnInit  , AfterViewInit{

  public displayedColumns = ['nom', 'secteur', 'entite', 'lien' ,'ref_document' ,'nameAxe','update', 'delete'];
  public dataSource = new MatTableDataSource<Ressource>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private repoService: RessourceService) { }
 
  ngOnInit() {
    this.getAllRessources();
  }
 
  public getAllRessources = () => {
    this.repoService.getAllRessources()
    .subscribe(res => {
      this.dataSource.data = res as Ressource[];

      console.log("*****************************");
      console.log(res);
    },
    (error) => {
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log(event);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 
  public redirectToUpdate = (id: string) => {
  }
 
  public redirectToDelete = (id: string) => {
  }

}
