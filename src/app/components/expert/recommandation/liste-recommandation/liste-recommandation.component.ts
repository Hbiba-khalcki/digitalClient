import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RecommandationService } from 'src/app/services/recommandation.service';
import { Recommandation } from 'src/app/models/recommandation.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-recommandation',
  templateUrl: './liste-recommandation.component.html',
  styleUrls: ['./liste-recommandation.component.css']
})
export class ListeRecommandationComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['contenu', 'priorite', 'reference','update', 'delete'];
  public dataSource = new MatTableDataSource<Recommandation>();
  submitted: boolean = false;
  recommandationFormGroup: FormGroup;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RecommandationService, private router: Router) { }

  ngOnInit() {
    this.getAllRecommandations();
  }

  public getAllRecommandations = () => {
    this.repoService.getAllRecommandations()
      .subscribe(res => {
        console.log(res);
        this.dataSource.data = res as Recommandation[];
        console.log(this.dataSource.data[1].id)
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

  public redirectToUpdate = (id : string ) => {
    const updateUrl: string = `ModifRec/${id}`;
    console.log(id);
    this.router.navigate([updateUrl]);
  }


  public redirectToDelete = (id: string) => {
    this.submitted = true;
    if (this.recommandationFormGroup?.invalid) return;
    this.repoService.DeleteRecommandation(this.recommandationFormGroup?.value).subscribe(data => {
      alert("succes save")
      this.recommandationFormGroup.reset()
    });

  }

}
