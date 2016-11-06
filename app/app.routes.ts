import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForm } from './components/loginForm/loginForm';
import { RegisterForm } from './components/registerForm/registerForm';
import { EditProfile } from './components/editProfile/editProfile';
import { MainPage } from './components/mainPage/mainPage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm },
  { path: 'edit-profile', component: EditProfile },
  { path: 'main-page', component: MainPage }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);