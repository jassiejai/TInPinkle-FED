import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  constructor(private http : HttpClient) { }

  item : any;

  getPlants(){

    this.http.
    get('http://localhost:9092/api/plants').
    subscribe(response =>{

      console.log(response);

      this.item = response;
      return response
     })}

  ngOnInit(): void {
  }

}
