import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Luan Lee", idade: 28},
    {nome: "Jean Bruce", idade: 33},
    {nome: "Paulo Cesar", idade: 55},
  ]
  constructor() { }

  ngOnInit(): void {
  }

   @Output() public enviarDados = new EventEmitter();
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
    console.log();
  }

}
