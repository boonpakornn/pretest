import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'exam-page',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent{

  selectedOption: number = 1;
  selectedValue: number = 0;
  result = false;

  options = [
    { name: "isPrime", value: 1 },
    { name: "isFibonacci", value: 2 }
  ]

  constructor(){
  }

  onChange() {
    this.selectedValue = this.selectedValue < 0 ? 1 : Math.round(this.selectedValue);
    console.log(this.selectedValue)
    this.result = this.selectedOption === 1 ? this.isPrime(this.selectedValue) : this.isFibonacci(this.selectedValue);
  }

  isPrime(num: number){
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num >= 1;
  }

  isFibonacci(num: number){
    let array = [0, 1];
    let max = 1;
    let i = 2;
    while(max < num) {
      array[i] = array[i-2] + array[i-1];
      max =  array[i];
      i++;
    }
    return array[i-1] === num;
  }
  
}
