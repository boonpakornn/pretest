import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Exam2Service } from '../service/exam2.service';

@Component({
  selector: 'exam-page',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit{

  arrayValue: any;
  fullCat: any;
  searchText: string = '';

  constructor(private exam2Service: Exam2Service){
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.arrayValue = await this.exam2Service.loadData();
    this.fullCat = this.arrayValue;
  }

  onChange() {
    this.arrayValue = this.fullCat;
    if(this.searchText) this.arrayValue = this.arrayValue.filter((x: string) => x.toLowerCase().includes(this.searchText.toLowerCase()));
  }

}
