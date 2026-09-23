import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  alertas = [
    { alumno: 'García Pérez, Juan', grado: '3ro A Secundaria', faltas: 4, ultimoAviso: 'Hace 2 horas' },
    { alumno: 'López Díaz, María', grado: '5to C Secundaria', faltas: 3, ultimoAviso: 'Ayer, 14:30' }
  ];

  ngOnInit(): void {}
}