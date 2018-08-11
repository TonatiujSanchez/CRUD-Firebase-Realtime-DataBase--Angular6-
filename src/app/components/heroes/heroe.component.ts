import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

    heroe:Heroe = {
        nombre:"",
        bio:"",
        casa:"Marvel"
    }
    
    nuevo:boolean= false;
    id:string;

    constructor(private _heroesService: HeroesService,
                private router: Router,
                private activateRoute:ActivatedRoute) {
                    
                    this.activateRoute.params
                        .subscribe(parametros=>{

                            this.id = parametros['id'];
                            if(this.id !== 'nuevo'){
                                /* Si Visual Studio Code, marca un error en this.heroe es por que 'data' no es de tipo Heroe,  
                                    pero la aplicaion funciona, solo hay que guardar de nuevo*/
                                this._heroesService.getHeroe( this.id )
                                    .subscribe( data => this.heroe = data )
                            }
                        });
                }

    ngOnInit() {
    }

    guardar(){
        console.log('Heroe: ',this.heroe);

        if(this.id == 'nuevo'){
            //insertar heroe
            this._heroesService.nuevoHeroe(this.heroe)
                .subscribe((data) =>{
                    console.log('data: ', data);
                    console.log('Heroe insertado');
                    
                    this.router.navigate(['/heroes']);
                },(error)=>{
                    console.log(error);            
                });

        }else{
            //actualizar heroe
            this._heroesService.actualizarHeroe(this.heroe, this.id)
                .subscribe((data) =>{
                    console.log(data);
                    console.log('Heroe actualizado');
                    
                },(error)=>{
                    console.log(error);
                    
                });
        }  
    }

    agregarNuevo(forma:NgForm){
        this.router.navigate(['/heroe', 'nuevo']);
        forma.reset({
            casa:"Marvel"
        });
    }

}
