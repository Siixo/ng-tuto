import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';
@Component({
  selector: 'app-http-api',
  imports: [],
  templateUrl: './meteo-api.component.html',
  styleUrls: ['./meteo-api.component.css'],
})
export class MeteoApiComponent {
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
