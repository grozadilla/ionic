import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaPeliculaPage } from './nueva-pelicula';

@NgModule({
  declarations: [
    NuevaPeliculaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaPeliculaPage),
  ],
  exports: [
    NuevaPeliculaPage
  ]
})
export class NuevaPeliculaPageModule {}
