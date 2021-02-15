import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonNodeComponent } from './person-node/person-node.component';
import {DemoMaterialModule} from "./material-modul";

@NgModule({
  declarations: [
    AppComponent,
    PersonNodeComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
