import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuItemComponent} from "./menu-item.component";

const routes: Routes = [{
  path: 'menu-item',
  component: MenuItemComponent,
}, {
  path: 'example-page',
  loadChildren: () => import('./example-page/example-page.module').then(m => m.ExamplePageModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
