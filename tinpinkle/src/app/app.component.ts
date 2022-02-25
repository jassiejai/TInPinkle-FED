import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tinpinkle';

  // spellbook code
  

  // Mystic index code
  mystic : boolean = true

  showIndex(){
    
    this.mystic = !this.mystic
    
  }


}
