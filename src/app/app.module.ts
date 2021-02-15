import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonNodeComponent } from './person-node/person-node.component';
import {DemoMaterialModule} from "./material-modul";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RenderDebugDirective} from "./directive/render-debuge.directive";

@NgModule({
  declarations: [
    AppComponent,
    PersonNodeComponent,
    RenderDebugDirective
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
