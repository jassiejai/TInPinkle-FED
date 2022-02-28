import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SpellbookComponent } from './spellbook/spellbook.component';
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SpellbookComponent,
    AppComponent,
    IndexComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers:[],
  bootstrap : [AppComponent]

})
export class AppModule { }
