import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beachUrl:string= "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/02/Playa-Paraiso_27th-Feb.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
