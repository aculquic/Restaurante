import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/models/lista.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
 title: string = 'Guia Restaurantes';
 items: Lista[] = [];
  constructor() { 
  }

  ngOnInit(): void {   
  }
 
  agregar(nombre: string, ciudad: string) { 
    nombre = nombre.split(",")[0];
    ciudad = ciudad.split(",")[1];
   let resul=true;

 if(this.items.length>0){
   this.items.forEach(element => {
     if(element.nombre === nombre){
       alert('El restaurante ya existe :( ');
       resul=false;
     }    
   });
   if(resul){
       this.items.push({nombre,ciudad});
   }
 }else{
   this.items.push({nombre,ciudad}) 
 }
  

this.items.sort((a, b)=>{
  //if(a[0]-b[0]){
    if(b.nombre > a.nombre){
    return 1;
  }else{
    return -1;
  }});
  
console.log('resultado de items:',this.items);
  
 }

}
