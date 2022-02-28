import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SpellbookComponent } from './spellbook/spellbook.component';

const routes: Routes = [
  {
    path : ' ', component : AppComponent,
  }, {

    path : 'spellbook ', 
    component : SpellbookComponent,

    //create another componet that open to specific spell
    // children : [{
    //   path: 'spellpage/:pageId' , component : SpellbookComponent
    // }]
  },
  {

    path : 'index ', 
    component : IndexComponent,

    // create another component that shows the specific item being choosen and the information on it
    // children : [{
    //   path: 'index/:itemId' , component : IndexComponent
    // }]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
