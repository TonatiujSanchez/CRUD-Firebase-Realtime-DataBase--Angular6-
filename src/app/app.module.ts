import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

/* --- Componentes --- */
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

/* --- Rutas --- */
import { APP_ROUTING } from './app.routes';

/* --- Servicios --- */
import { HeroesService } from './services/heroes.service';

/* --- Pipes --- */
import { KeysPipe } from './pipes/keys.pipe';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
      HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
