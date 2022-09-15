import { Component, OnInit } from '@angular/core';

//Service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

    public foodList: Array<string> = [];
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();

    this.foodListService.emitEvent.subscribe({
      // res  => alert(`Você add => ${res}`), //forma ensinada no curso(depreciada) necessário remover as chaves {}
      next: (res: string) => alert(`Você add => ${res}`), //forma atualizada de fazer
      });
  }

}
