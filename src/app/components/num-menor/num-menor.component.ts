import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-menor',
  templateUrl: './num-menor.component.html',
  styleUrls: ['./num-menor.component.css'],
})
export class NumMenorComponent implements OnInit {
  num_one!: HTMLInputElement;
  num_two!: HTMLInputElement;
  total!: HTMLInputElement;
  resultado!: number;
  constructor() {}

  ngOnInit(): void {}

  numMenor() {
    this.total = this.num_one < this.num_two ? this.num_one : this.num_two;
  }
}
