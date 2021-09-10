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

  constructor(private recommandationService: RecommandationService, private router: Router) { }

  ngOnInit() {
    this.getAllRecommandations();
  }

  getAllRecommandations(){
    this.recommandationService.getAllRecommandations()
      .subscribe(res => {
        console.log(res);
        this.dataSource.data = res as Recommandation[];
        console.log(this.dataSource.data[1].id)
      },
        (error) => {
        })     
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  customSort(event){
    console.log(event);
  }

  doFilter(value: string){
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

   redirectToUpdate(id : string ){
    const updateUrl: string = `ModifRec/${id}`;
    console.log(id);
    this.router.navigate([updateUrl]);
  }


   redirectToDelete(id: string) {
    this.submitted = true;
    if (this.recommandationFormGroup?.invalid) return;
    this.recommandationService.DeleteRecommandation(this.recommandationFormGroup?.value).subscribe(data => {
      alert("succes save")
      this.recommandationFormGroup.reset()
    });

  }
  onDeleteQuestion(id:string){
    this.recommandationService.DeleteRecommandation(id).subscribe(data =>{
      this.getAllRecommandations();
    });
  }

  onUpdateRecommandation(id:string){
    this.router.navigateByUrl("/modifrec/"+id)
  }
}
