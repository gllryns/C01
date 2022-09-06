import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Bienvenidos a Angular'; 
  title: string = 'Clase Uno'; 
  appversion: string = '0.2'; 
  subtitulo: string;
  prods = [{id:1,name:'coche'},{id:1,name:'bici'},{id:1,name:'patineta'}]
  fecha : Date;
  contador : number;

  constructor() {
    this.subtitulo = "Otro";
    this.fecha = new Date();
    this.contador = 0;
  }
    // setTimeout(()=>{
    //   this.contador++;
    //   if (this.contador>this.subtitulo.length) this.contador = 0;
    // }, 1000)
}
