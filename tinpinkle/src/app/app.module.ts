import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SpellbookComponent } from './spellbook/spellbook.component';
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animal/animal.component';
import { PlantComponent } from './plant/plant.component';




@NgModule({
  declarations: [
     AppComponent,
     SpellbookComponent,
    IndexComponent,
    NavbarComponent,
    SlideshowComponent,
    HomeComponent,
    AnimalComponent,
    PlantComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule

  ],
  providers:[],
  bootstrap : [AppComponent]

})
export class AppModule { }
