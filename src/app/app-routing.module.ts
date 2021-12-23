import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuItemComponent} from "./menu-item.component";

const routes: Routes = [{
  path: 'menu-item',
  component: MenuItemComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
