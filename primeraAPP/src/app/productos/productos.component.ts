import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  titulo: String = 'Esta es la pagina de productos!';
  public nombre: String = 'Dime como te llamas';
  visible: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  mustraOculta() {
    this.visible = !this.visible;
  }

}
