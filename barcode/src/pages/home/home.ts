import { ProductosService } from './../../shared/productos-service';
import { ProductoModel } from './../../shared/ProductosModel';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public barcode: BarcodeScanResult;
  public codigo: String;
  public productos: ProductoModel[];

  constructor(public navCtrl: NavController, 
    public scanner: BarcodeScanner,
    public productosService: ProductosService) {

  }

  ionViewDidLoad(){
    /*this.productos = [
      new ProductoModel('978020137961','producto1'),
      new ProductoModel('978020137962','producto2'),
      new ProductoModel('978020137963','producto3'),
      new ProductoModel('978020137964','producto4'),
      new ProductoModel('978020137965','producto5'),
      new ProductoModel('978020137966','producto6')
    ]*/
    this.productosService.getProductos().then((prods: ProductoModel[])=>{
      this.productos = prods;
    })
  }

  escanear(){
    this.scanner.scan().then((barcodeData) => {
      this.barcode = barcodeData;
    })
  }

  codificar(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.codigo);
  }

}
