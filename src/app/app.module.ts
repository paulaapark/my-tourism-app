import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { ImportantTextDirective } from './directives/important-text.directive';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    ImportantTextDirective,
    TechIdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
