import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss']
})
export class SpellbookComponent implements OnInit {

  spellBook : boolean = true

  showSpell(){
    
    this.spellBook = !this.spellBook
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
