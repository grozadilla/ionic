import { ProductoModel } from './../../shared/ProductosModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productoUpperCase',
})
export class ProductoUpperCasePipe implements PipeTransform {
  transform(productos: ProductoModel[]) {
    console.log(productos);
    if(productos){
      //return productos.map((item) => new ProductoModel(item.codigo,item.nombre.toUpperCase()));     
      return productos.map(function(item){
        return new ProductoModel(item.codigo,item.nombre.toUpperCase());
      });
    }else{
      return productos;
    }
  }
}
