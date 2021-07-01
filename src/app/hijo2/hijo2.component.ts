import { DatosService } from './../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.scss'],
})
export class Hijo2Component implements OnInit {

  numeroComun: number; // variable local subscrita a la variable global del servicio

  constructor(private datosService: DatosService) {
    // en el servicio me subscribo al observable que recibe el cambio de valor en la variable n que asigno a la variable
    // local numeroComun que será la que muestro en el template
    this.datosService.variableGlobal.subscribe( n => {
      this.numeroComun = n;
    });
  }

  ngOnInit() {}

}
