import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrNama = [];
  arrPenjelasan = [];
  nama = '';
  penjelasan = '';

  SubmitBtn(){
    this.arrNama.push(this.nama);
    this.arrPenjelasan.push(this.penjelasan);
  }

}