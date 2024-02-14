import { Component } from '@angular/core';
import { Shop } from './model/shop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  viva: number = 22.8;
  caristal: number = 66.9610666666667;
  hotDrinks: number = 1225.03333333333;
  days: number = 29;
  sum1: number = 0;
  sum2: number = 0;
  sum3: number = 0;
  month: string = 'Февруари';
  data: Shop[] = [
    {
      day: 1,
      vivaArticles: 2,
      hotDrinksArticles: 45,
      caristalArticles: 5,
    },
    {
      day: 2,
      vivaArticles: 2,
      hotDrinksArticles: 51,
      caristalArticles: 3,
    },
    {
      day: 3,
      vivaArticles: 2,
      hotDrinksArticles: 34,
      caristalArticles: 2,
    },
    {
      day: 4,
      vivaArticles: 3,
      hotDrinksArticles: 32,
      caristalArticles: 0,
    },
    {
      day: 5,
      vivaArticles: 0,
      hotDrinksArticles: 26,
      caristalArticles: 1,
    },
    {
      day: 6,
      vivaArticles: 0,
      hotDrinksArticles: 44,
      caristalArticles: 4,
    },
    {
      day: 7,
      vivaArticles: 0,
      hotDrinksArticles: 40,
      caristalArticles: 1,
    },
    {
      day: 8,
      vivaArticles: 0,
      hotDrinksArticles: 53,
      caristalArticles: 2,
    },
    {
      day: 9,
      vivaArticles: 3,
      hotDrinksArticles: 56,
      caristalArticles: 2,
    },
    {
      day: 10,
      vivaArticles: 2,
      hotDrinksArticles: 46,
      caristalArticles: 1,
    },
    {
      day: 11,
      vivaArticles: 2,
      hotDrinksArticles: 39,
      caristalArticles: 3,
    },
    {
      day: 12,
      vivaArticles: 1,
      hotDrinksArticles: 57,
      caristalArticles: 3,
    },
    {
      day: 13,
      vivaArticles: 5,
      hotDrinksArticles: 48,
      caristalArticles: 3,
    },
  ];
  sumViva = this.data.forEach((item) => {
    this.sum1 += Number(item.vivaArticles);
    console.log(this.sum1);
  });

  sumHot = this.data.forEach((item) => {
    this.sum2 += Number(item.hotDrinksArticles);
    console.log(this.sum2);
  });

  sumCaristal = this.data.forEach((item) => {
    this.sum3 += Number(item.caristalArticles);
    console.log(this.sum3);
  });
  // flag100: boolean =
  //   this.sum2 - (this.mm100 * this.data.length) / this.days > 0;
  returnCondition(sum: number, fuel: number): string {
    // console.log(sum - (fuel * this.data.length) / this.days);
    return sum - (fuel * this.data.length) / this.days > 0
      ? 'сме наваксали с'
      : 'сме изостанали с';
  }
  condition1 = this.returnCondition(this.sum1, this.viva);
  condition2 = this.returnCondition(this.sum2, this.hotDrinks);
  condition3 = this.returnCondition(this.sum3, this.caristal);
}
