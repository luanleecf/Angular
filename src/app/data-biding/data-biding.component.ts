import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Luan";
  public idade: number = 28;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://s2.glbimg.com/bgam5dh_jixemPzR-3t-oSb87U0=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/e/n/UtuAhWQNWA4FdvEUCp2A/dragon-ball-z-goku.jpg"
  public imgTitle: string = "Goku";
  public imgAlt: string = "Goku";

  public position: { x: number, y: number } = { x: 0, y: 0 }

  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: String) {
    alert(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
