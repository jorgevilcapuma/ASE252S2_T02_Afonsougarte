import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-matriz-asistencia',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './matriz-asistencia.component.html',
  styleUrls: ['./matriz-asistencia.component.css']
})
export class MatrizAsistenciaComponent implements OnInit {
  gradoSeleccionado: string = '4to A - Secundaria';
  mesSeleccionado: string = 'Octubre 2026';
  
  diasMes: number[] = Array.from({ length: 15 }, (_, i) => i + 1);
  
  estudiantes = [
    { id: 1, nombre: 'Alvarado Mendoza, Juan Carlos', estado: 'P', porcentaje: '85%' },
    { id: 2, nombre: 'Bustamante Morales, Lucía', estado: 'P', porcentaje: '100%' },
    { id: 3, nombre: 'Castro Villanueva, Sofía Andrea', estado: 'A', porcentaje: '78%' },
    { id: 4, nombre: 'Díaz Peña, Carlos Arturo', estado: 'T', porcentaje: '95%' }
  ];

  resumen = { promedio: '92.5%', inasistencias: 45, tardanzas: 12 };

  ngOnInit(): void {}

  exportarPDF(): void {
    alert('Exportando Matriz a PDF...');
  }
}