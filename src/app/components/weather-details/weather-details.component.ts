import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
  
  
})

export class WeatherDetailsComponent implements OnInit {
  name!:string;
  summerM!:number;
  summerN!:number;
  winterM!:number;
  winterN!:number;
  springM!:number;
  springN!:number;
  autumnM!:number;
  autumnN!:number;
  visitFrom!:string;
  visitTo!:string;
  
  



  constructor(private route: ActivatedRoute) { }
    
  

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.summerM = this.route.snapshot.params['summerM'];
    this.summerN = this.route.snapshot.params['summerN'];
    this.winterM = this.route.snapshot.params['winterM'];
    this.winterN = this.route.snapshot.params['winterN'];
    this.springM = this.route.snapshot.params['springM'];
    this.springN = this.route.snapshot.params['springN'];
    this.autumnM = this.route.snapshot.params['autumnM'];
    this.autumnN = this.route.snapshot.params['autumnN'];
    this.visitFrom = this.route.snapshot.params['visitFrom'];
    this.visitTo = this.route.snapshot.params['visitTo'];

  }

}
