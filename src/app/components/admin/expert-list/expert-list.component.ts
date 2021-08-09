import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


interface Expert {
  id: string;
  name: string;
  dateOfBirth: Date;
  address: string;
}


@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Expert>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public customSort = (event) => {
    console.log(event);
  };

  public redirectToUpdatePage = (id) => {
    const updateUrl: string = `/expert/update/${id}`;
    /*this.router.navigate([updateUrl]); */
  };


  /*
  import { Expert } from '../../_interface/owner.model';
  import { RepositoryService } from './../../shared/repository.service';

    constructor(private repoService: RepositoryService) { }
    ngOnInit() {
      this.getAllExperts();
    }
    public getAllExperts = () => {
      this.repoService.getData('api/expert')
        .subscribe(res => {
          this.dataSource.data = res as Expert[];
        })
    }
    public redirectToDetails = (id: string) => {

    }
    public redirectToUpdate = (id: string) => {

    }
    public redirectToDelete = (id: string) => {

    }*/

}
