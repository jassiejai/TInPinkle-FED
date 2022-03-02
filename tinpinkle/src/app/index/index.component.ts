import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  mystic : boolean = true

  // showIndex(){
    
  //   this.mystic = !this.mystic
    
  // }

  item: any;

  index: any;


  constructor(private http: HttpClient) { }


  toggle(){

    this.mystic = !this.mystic
  }



   getPlants(){

    this.http.
    get('http://localhost:9092/api/plants').
    subscribe(response =>{

      console.log(response);

      this.item = response;
      return response
     })}

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
