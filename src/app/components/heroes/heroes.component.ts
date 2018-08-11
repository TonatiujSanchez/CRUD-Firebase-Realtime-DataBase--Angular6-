import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

    heroes:any[]=[];
    loading:boolean = true;

    constructor( private _heroesService:HeroesService ) {
        this._heroesService.getHeroes().subscribe((data)=>{
            
            /*El 'seTimeout' fue agregado solo para relentizar la aperición 
              de los datos y así sea visible la alerta de cargando*/
            setTimeout(() => {
                /* Si Visual Studio Code, marca un error en this.heroes es por que es de tipo any pero  
                la aplicaion funciona solo hay que guardar de nuevo*/
                this.heroes = data;
                this.loading = false;
            }, 2000);


        });
    }


    ngOnInit() {
    }


    borrarHeroe(key$:string){
        console.log(key$);
        this._heroesService.eliminarHeroe(key$).
            subscribe((data)=>{
                console.log('data: ',data);
                if(data){
                    //Existe un error
                    console.error(data);
                    
                }else{
                    //Todo correcto
                    delete this.heroes[key$];
                }
            });

    }


}
