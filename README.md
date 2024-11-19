### psite

#Devi avere i seguenti strumenti installati:
Node.js: Angular richiede Node.js per funzionare. Scarica e installa Node.js (versione consigliata LTS) da nodejs.org.
Dopo l'installazione, verifica con:
  node -v
  npm -v

Installa Angular CLI globalmente usando il comando:
  npm install -g @angular/cli
Verifica l'installazione:
  ng version

Crea un nuovo progetto con il comando:
  ng new nome-del-tuo-progetto
Sostituisci nome-del-tuo-progetto con il nome che preferisci per il progetto.

Entra nella cartella del progetto:
  cd nome-del-tuo-progetto

Per verificare che tutto sia stato configurato correttamente, avvia il server di sviluppo:
  ng serve
Apri il browser e vai a http://localhost:4200. Dovresti vedere la pagina di default fornita da Angular.

##Crea la pagina di routing (dovrebbe essere assente)
Vai nella directory del tuo progetto:

cd nome-del-tuo-progetto

ng generate module app-routing --flat --module=app

Questo comando creerà un file chiamato app-routing.module.ts nella cartella src/app/ e lo collegherà automaticamente al modulo principale AppModule.

#Inserisci all'interno della pagina il seguetne codice:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondaPaginaComponent } from './seconda-pagina/seconda-pagina.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Pagina di default
  { path: 'seconda-pagina', component: SecondaPaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

Assicurati che il modulo di routing sia importato correttamente in app.module.ts:

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import del modulo di routing
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondaPaginaComponent } from './seconda-pagina/seconda-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondaPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
