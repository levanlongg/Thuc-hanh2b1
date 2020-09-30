import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { MenuComponent } from './bai1/menu/menu.component';
import { FooterComponent } from './bai1/footer/footer.component';
import { MainComponent } from './bai1/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    MenuComponent,
    FooterComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
