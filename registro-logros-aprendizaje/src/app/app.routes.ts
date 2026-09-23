import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MatrizAsistenciaComponent } from './features/asistencia/matriz-asistencia/matriz-asistencia.component';
import { AlertasComponent } from './features/asistencia/alertas/alertas.component';
import { ConfiguracionComponent } from './features/configuracion/configuracion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'asistencia/matriz', component: MatrizAsistenciaComponent },
  { path: 'asistencia/alertas', component: AlertasComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: '**', redirectTo: 'login' }
];