import { ProductoModel } from './ProductosModel';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProductosService {

    public productos: ProductoModel[];

    constructor(public http: Http, public local: Storage) {
        this.saveProductos();
    }

    public getProductos(){
        return new Promise((resolve, reject) => {
            this.local.ready().then(()=>{
                this.local.get('productos').then(data => {
                    let productos: ProductoModel[] = [];
                    if(data){
                        for(let prod of data){
                            productos.push(new ProductoModel(prod.codigo, prod.nombre));
                        }    
                    }

                    resolve(productos);
                })
            })
            .catch(()=>{
                reject(new Error("La BD no funciona!"));
            })
        });
    }

    public saveProductos(){
        this.local.ready().then(()=>{
            this.local.set('productos',[
                new ProductoModel('978020137961','producto1'),
                new ProductoModel('978020137962','producto2'),
                new ProductoModel('978020137963','producto3'),
                new ProductoModel('978020137964','producto4'),
                new ProductoModel('978020137965','producto5'),
                new ProductoModel('978020137966','producto6')
            ])
        })
    }

    public saveProducto(){

    }
}