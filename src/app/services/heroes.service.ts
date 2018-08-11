import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable()

export class HeroesService {
    
    heroesURL:string = "https://crudapp-a682e.firebaseio.com/heroes.json";
    heroeURL:string ="https://crudapp-a682e.firebaseio.com/heroes";
  
    constructor( private http:HttpClient ) { }

    /* Insertar nuevo héroe a Firebase */
    nuevoHeroe( heroe:Heroe ): Observable<any>{
        let body = JSON.stringify( heroe );
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.heroesURL, body, {headers});
    }

    /* Actualizar héroe */
    actualizarHeroe( heroe:Heroe, key$:string ){
        let body = JSON.stringify( heroe );
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let url = `${ this.heroeURL }/${ key$ }.json`;

        return this.http.put( url, body, {headers} );
    }

    /* Consultar un héroe */
    getHeroe( key$:string){
        let url = `${ this.heroeURL }/${ key$ }.json`;

        return this.http.get(url);
    }

    /* Consultar todos los héroes */
    getHeroes(){
        return this.http.get(this.heroesURL);
    }

    /* Eliminar héroe */
    eliminarHeroe(key$:string){
        let url = `${ this.heroeURL}/${key$}.json`;

        return this.http.delete(url);
    }
}
