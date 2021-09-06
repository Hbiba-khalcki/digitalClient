import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ReponseService } from 'src/app/services/reponse.service';
import { Reponse } from 'src/app/models/reponse.model';

@Component({
  selector: 'app-liste-reponse',
  templateUrl: './liste-reponse.component.html',
  styleUrls: ['./liste-reponse.component.css']
})
export class ListeReponseComponent implements OnInit  , AfterViewInit{

  public displayedColumns = ['contenu', 'pourcentage', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Reponse>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private repoService: ReponseService) { }
 
  ngOnInit() {
    this.getAllReponses();
  }
 
  public getAllReponses = () => {
    this.repoService.getAllReponses()
    .subscribe(res => {
      this.dataSource.data = res as Reponse[];
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
