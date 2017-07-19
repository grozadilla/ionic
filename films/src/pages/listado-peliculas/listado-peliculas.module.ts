import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoPeliculasPage } from './listado-peliculas';

@NgModule({
  declarations: [
    ListadoPeliculasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoPeliculasPage),
  ],
  exports: [
    ListadoPeliculasPage
  ]
})
export class ListadoPeliculasPageModule {}
