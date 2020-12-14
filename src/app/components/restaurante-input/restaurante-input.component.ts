
import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-restaurante-input',
  templateUrl: './restaurante-input.component.html',
  styleUrls: ['./restaurante-input.component.css']
})
export class RestauranteInputComponent implements OnInit {
  @Output() value = new EventEmitter();
@ViewChild('nombreForm')nombreForm:ElementRef;
@ViewChild('nombreCiudad')nombreCiudad:ElementRef;
  nombre: string= "";
  ciudad: string= ""; 
 
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){ 
    if(this.nombre && this.ciudad ){       
      const n = this.nombre; 
      const c = this.ciudad;
      this.value.emit(`${n},${c}`)    
      this.nombre='';
      this.ciudad='';
    }

    };

    OnAgregar(nombre: string, ciudad: string){
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.nombreForm.nativeElement.value='';
      this.nombreCiudad.nativeElement.value='';

      if(this.nombre && this.ciudad ){       
        const n = this.nombre; 
        const c = this.ciudad;
        this.value.emit(`${n},${c}`)    
        this.nombre='';
        this.ciudad='';
      }
      else{
        alert('Los campos estan vacios')
      }
    };


}
