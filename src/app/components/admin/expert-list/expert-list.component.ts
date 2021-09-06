
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ExpertService } from 'src/app/services/expert.service';
import { Expert } from 'src/app/models/expert.model';


@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit , AfterViewInit{

  public displayedColumns = ['username', 'email', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Expert>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: ExpertService, private router: Router) { }

  ngOnInit() {
    this.getAllExperts();
  }

  public getAllExperts = () => {
    this.repoService.getAll()
    .subscribe(res => {
      this.dataSource.data = res as Expert[];
    },
    (error) => {
    });
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

  public redirectToDetails = (id: string) => {
    let url: string = `/expert/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
  }

  public redirectToDelete = (id: string) => {
  }

}

