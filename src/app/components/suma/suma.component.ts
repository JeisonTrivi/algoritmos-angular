import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent implements OnInit {
  num_one: any;
  num_two!: any;
  total!: HTMLInputElement;
  resultado!: number;
  constructor() {}

  ngOnInit(): void {}

  Suma() {
    this.total = this.num_one + this.num_two;
  }
}
