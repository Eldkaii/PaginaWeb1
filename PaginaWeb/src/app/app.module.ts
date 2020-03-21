import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderPrincipalComponent } from './Componentes/Headers/header-principal/header-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
