import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuItemComponent} from "./menu-item.component";
import {MenuItemModule} from "@mybpm.workspace/menu-item";

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenuItemModule,
  ],
  exports: [AppComponent, MenuItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
