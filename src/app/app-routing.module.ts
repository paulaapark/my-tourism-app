import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'weather/:name', component: WeatherDetailsComponent},
  {path: 'weather/:name/:springN/:springM/:summerN/:summerM/:autumnN/:autumnM/:winterN/:winterM/:visitFrom/:visitTo', component: WeatherDetailsComponent},
  {path: 'tech-ideas', component: TechIdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
