import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  mystic : boolean = true

  showIndex(){
    
    this.mystic = !this.mystic
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
