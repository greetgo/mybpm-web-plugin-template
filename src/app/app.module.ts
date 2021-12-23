import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuItemComponent} from "./menu-item.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [AppComponent, MenuItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
