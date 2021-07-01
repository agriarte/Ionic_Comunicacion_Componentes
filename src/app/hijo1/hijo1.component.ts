import { DatosService } from './../services/datos.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss'],
})
export class Hijo1Component implements OnInit {

  //input a la escucha de una variable del padre
  @Input() variableDelHijo = 'nada de momento';
  //output mediante evento de emisión
  @Output() cambioVariableDelHijo = new EventEmitter<string>();

  numeroComun: number; // variable local subscrita a la variable global del servicio

  constructor(private datosService: DatosService) {
    // en el servicio me subscribo al observable que recibe el cambio de valor en la variable n que asigno a la variable
    // local numeroComun que será la que muestro en el template
    this.datosService.variableGlobal.subscribe( n => {
      this.numeroComun = n;
    });
  }

  ngOnInit() {}

  doCambiarPadre() {
    //cambiar la variable en el hijo y emitirla al padre
    this.variableDelHijo = 'esta cadena la cambio en el hijo';
    this.cambioVariableDelHijo.emit ( this.variableDelHijo);
  }

}
