import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-restaurante-body',
  templateUrl: './restaurante-body.component.html',
  styleUrls: ['./restaurante-body.component.css']
})
export class RestauranteBodyComponent implements OnInit {
 //@Input() items: Lista[];

 @Input() items: Lista[] =[];

  constructor() { 

  } 

  ngOnInit(): void {

  }

}
