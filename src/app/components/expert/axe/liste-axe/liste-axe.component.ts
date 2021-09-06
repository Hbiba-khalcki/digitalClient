import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AxeService } from 'src/app/services/axe.service';
import { Axe } from 'src/app/models/axe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-axe',
  templateUrl: './liste-axe.component.html',
  styleUrls: ['./liste-axe.component.css']
})
export class ListeAxeComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['nameAxe', 'degreImportance', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Axe>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private repoService: AxeService, private router: Router) { }
 
  ngOnInit() {
    this.getAllAxes();
  }
 
  public getAllAxes = () => {
    this.repoService.getAllAxes()
    .subscribe(res => {
      this.dataSource.data = res as Axe[];
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
    let url: string = `ModifAxe/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToDelete = (id: string) => {
  }


}
