import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';
@Component({
  selector: 'app-exercice2',
  imports: [],
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component {
  title: string = 'apiData';
  newData: any;
  constructor(private apiService: MeteoService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((res) => {
      this.newData = res;
      console.log(this.newData);
      console.log(this.newData.city_info.name);
    });
  }
}
