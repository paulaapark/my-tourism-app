import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { prohibitedWordValidator } from './customValidation';


@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
cities;

  constructor(private _cityname: GetCityNamesService, private formBuilder:FormBuilder ) { 
    this.cities=this._cityname.getNames();
  }

  techIdeasForm = this.formBuilder.group({
    name: ["", [Validators.required,Validators.minLength(3),prohibitedWordValidator(/tourist/i)]],
    age: [""],
    email: ["",[Validators.required]],
    city: ["", [Validators.required]],
    brief: ["", [Validators.required,Validators.minLength(100),prohibitedWordValidator(/nothing/i)]]
  });

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.techIdeasForm.controls.brief.value);
    this.techIdeasForm.reset();
  }

  get nameFormControl(){
    return this.techIdeasForm.get('name')!;
  }

  get emailFormControl(){
    return this.techIdeasForm.get('email')!;
  }

  get cityFormControl(){
    return this.techIdeasForm.get('city')!;
  }

  get briefFormControl(){
    return this.techIdeasForm.get('brief')!;
  }

}
