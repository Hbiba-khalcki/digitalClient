import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router';

import { QuestionService } from 'src/app/services/question.service';

import { Axe } from 'src/app/models/axe.model';
import { Question } from 'src/app/models/question.model';


@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.css']
})
export class ListeQuestionComponent implements OnInit  , AfterViewInit{

  public displayedColumns = ['contenu', 'pourcentage','nbrReponse', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Question>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private questionService: QuestionService, private router: Router) { }
 
  ngOnInit() {
    this.getAllQuestions();
  }
 
  public getAllQuestions = () => {
    this.questionService.getAllQuestions()
    .subscribe(res => {
      this.dataSource.data = res as Question[];
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
 
  public redirectToDetails = (id: string) => {
    let url: string = `/AjoutRep/${id}`;
    this.router.navigate([url]);
  }
 
  
  onDeleteQuestion(id:string){
    this.questionService.DeleteQuestion(id).subscribe(data =>{
      this.getAllQuestions();
    });
}

onUpdateQuestion(id:string){
  this.router.navigateByUrl("/modifQuest/"+id)
}
}