import { ProductoModel } from './../../shared/ProductosModel';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtrarProductos',
})
export class FiltrarProductosPipe implements PipeTransform {
  transform(productos: ProductoModel[], nombre: String) {
    if(!nombre){
      return productos;
    }else{
      return productos.filter(producto => producto.nombre.includes(nombre.toUpperCase()));
    }
  }
}
