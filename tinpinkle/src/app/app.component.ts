import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tinpinkle';

// spellbook button code
  spellBook : boolean = true

  showSpell(){
    
    this.spellBook = !this.spellBook
  }

  // Mystic index code
 

}
