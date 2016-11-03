import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForm } from './components/loginForm/loginForm';
import { RegisterForm } from './components/registerForm/registerForm';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);