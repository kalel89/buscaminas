import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableroComponent } from './scenes/tablero/tablero.component';
import { BackendService } from './services/backend.service';


@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
