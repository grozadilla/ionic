import { NuevaPeliculaPage } from './../pages/nueva-pelicula/nueva-pelicula';
import { DetallePeliculaPage } from './../pages/detalle-pelicula/detalle-pelicula';
import { ListadoPeliculasPage } from './../pages/listado-peliculas/listado-peliculas';
import { PeliculasPage } from './../pages/peliculas/peliculas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PeliculasPage,
    ListadoPeliculasPage,
    DetallePeliculaPage,
    NuevaPeliculaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PeliculasPage,
    ListadoPeliculasPage,
    DetallePeliculaPage,
    NuevaPeliculaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
