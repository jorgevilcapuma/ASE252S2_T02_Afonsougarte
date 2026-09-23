import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    correo: '',
    contrasena: '',
    rol: 'DOCENTE'
  };

  constructor(private router: Router) {}

  onLogin(): void {
    console.log('Iniciando sesión con:', this.credentials);
    this.router.navigate(['/dashboard']);
  }
}