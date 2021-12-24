import {NgModule} from "@angular/core";
import {ExamplePageComponent} from "./example-page.component";
import {ExamplePageRoutingModule} from "./example-page-routing.module";

@NgModule({
  declarations: [
    ExamplePageComponent
  ],
  imports: [
    ExamplePageRoutingModule,
  ],
})
export class ExamplePageModule {
}
