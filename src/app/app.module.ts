import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };


import { AppComponent } from './app.component';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { PublicoComponent } from './pages/publico/publico.component';
import { AppROutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EscritorioComponent,
    HomeComponent,
    NuevoTicketComponent,
    PublicoComponent
  ],
  imports: [
    BrowserModule,
    AppROutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
