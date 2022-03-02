import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SpellbookComponent } from './spellbook/spellbook.component';
import { AnimalComponent } from './animal/animal.component';
import { PlantComponent } from './plant/plant.component';

const routes: Routes = [
  // {
  //   path : 'home', component : AppComponent,
  // }
  // ,
   {

    path : 'spellbook', 
    component : SpellbookComponent,

    //create another componet that open to specific spell
    // children : [{
    //   path: 'spellpage/:pageId' , component : SpellbookComponent
    // }]
  },
  {

    path : 'index', 
    component : IndexComponent,

    // create another component that shows the specific item being choosen and the information on it
    children : [{
      path: 'index/:itemId' , component : PlantComponent
    },
    {
      path: 'index/:itemId' , component : AnimalComponent
    }
  
  ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
