import { PeliculaModel } from './../../shared/peliculaModel';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-nueva-pelicula',
  templateUrl: 'nueva-pelicula.html',
})
export class NuevaPeliculaPage {

  public pelicula: PeliculaModel = new PeliculaModel('','',false);

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaPeliculaPage');
  }

  guardar(){
    console.log(this.pelicula);
    this.viewCtrl.dismiss(this.pelicula);
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
