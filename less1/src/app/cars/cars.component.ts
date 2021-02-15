import { Component, OnInit } from '@angular/core';
import { cars } from 'src/cars/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars = cars;
  


}
