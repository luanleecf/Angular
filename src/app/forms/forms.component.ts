import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, preco: string}> = [
    { comida: "X-salada", preco: "R$10,00" },
    { comida: "X-Bacon", preco: "R$11,00" },
    { comida: "Coxinha", preco: "R$12,00" },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
