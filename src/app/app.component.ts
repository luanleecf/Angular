import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-data-biding></app-data-biding> -->
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
  <!-- <app-new-component></app-new-component> -->
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Adiciona</button>
  <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor() { }
  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }
}
