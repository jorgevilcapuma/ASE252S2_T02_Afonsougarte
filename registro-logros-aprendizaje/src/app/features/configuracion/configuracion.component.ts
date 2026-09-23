import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  colegio = {
    nombre: 'I.E. 20191 Alfonso Ugarte',
    codigoModular: '0285940',
    direccion: 'San Vicente de Cañete, Lima, Perú',
    colorHex: '#760009',
    colorSecundario: '#FDC425'
  };

  guardarCambios() {
    alert('¡Configuración guardada con éxito!');
  }
}