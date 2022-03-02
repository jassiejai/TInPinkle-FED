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


  constructor(private http: HttpClient) { }


  toggle(){

    this.mystic = !this.mystic
  }
  

  ngOnInit(): void {
  }

}
