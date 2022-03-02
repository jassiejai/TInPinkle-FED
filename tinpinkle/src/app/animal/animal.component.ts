import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})

export class AnimalComponent implements OnInit {

  index : any;

 constructor(private http: HttpClient) { }


  getAnimals(){
       
    this.http.
    get('http://localhost:9092/api/animals').
    subscribe(response =>{

      console.log(response);

      this.index = response;
     //  JSON.stringify(response);
      return response
     })
    }
 

  ngOnInit(): void {
  }

  
}