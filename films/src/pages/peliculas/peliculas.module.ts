import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeliculasPage } from './peliculas';

@NgModule({
  declarations: [
    PeliculasPage,
  ],
  imports: [
    IonicPageModule.forChild(PeliculasPage),
  ],
  exports: [
    PeliculasPage
  ]
})
export class PeliculasPageModule {}
