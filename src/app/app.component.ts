import { Component } from '@angular/core';
import { GetCityNamesService } from './services/get-city-names.service';
import { GetweatherService } from './services/getweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName:string= "Paula";
  cities;
  weatherData;

  constructor(private _cityname: GetCityNamesService, private _weatherData:GetweatherService) { 
    this.cities=this._cityname.getNames();
    this.weatherData = this._weatherData.getWeather();
  }
  
}
