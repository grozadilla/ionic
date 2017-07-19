import { ListadoPeliculasPage } from './../pages/listado-peliculas/listado-peliculas';
import { PeliculasPage } from './../pages/peliculas/peliculas';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InicioPage;

  @ViewChild('content') nav: Nav;
  pages: Array<{titulo: String, component: any, icon: String}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      {titulo: "Inicio", component: InicioPage, icon: "home"},
      {titulo: "Peliculas", component: PeliculasPage, icon:"film"},
      {titulo: "Listado", component: ListadoPeliculasPage, icon:"videocam"}
    ]
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide(); 
    });
  }

  abrirPagina(pagina: any){
    this.nav.setRoot(pagina.component);
  }
}

