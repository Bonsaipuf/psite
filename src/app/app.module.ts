import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Assicurati che questo file esista
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Assicurati che il componente principale esista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Assicurati che il modulo di routing esista o commentalo temporaneamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
