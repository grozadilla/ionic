import { PeliculaModel } from './../../shared/peliculaModel';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalle-pelicula',
  templateUrl: 'detalle-pelicula.html',
})
export class DetallePeliculaPage {

  private pelicula: PeliculaModel;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.pelicula = navParams.get("pelicula");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePeliculaPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
