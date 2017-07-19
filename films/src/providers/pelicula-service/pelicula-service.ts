import { PeliculaModel } from './../../shared/peliculaModel';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeliculaServiceProvider {

  peliculas: PeliculaModel[];

  constructor(public http: Http) {
  }

  getPeliculas(){
    return new Promise((resolve, reject) => {
      this.http.get('http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
        .map(res => res.json())
        .map((lists: Object[])=>{
          return lists.map(item => PeliculaModel.fromJSON(item));
        })
        .subscribe((data: any) => {
          this.peliculas = data;
          resolve(this.peliculas);
        });     
    });

  }

}
