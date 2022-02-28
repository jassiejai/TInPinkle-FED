import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SpellbookComponent } from './spellbook/spellbook.component';

const routes: Routes = [
  {
    path : ' ', component : AppComponent,
  }, {

    path : 'spellbook ', component : SpellbookComponent,

    children : [{
      path: 'spellpage/:pageId' , component : SpellbookComponent
    }]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
