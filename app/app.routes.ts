import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForm } from './components/loginForm/loginForm';
import { RegisterForm } from './components/registerForm/registerForm';
import { EditProfile } from './components/editProfile/editProfile';
import { Profile } from './components/profile/profile';
import { FrontPage } from './components/frontPage/frontPage';
import { Search } from './components/search/search';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm },
  { path: 'edit-profile', component: EditProfile },
  { path: 'profile', component: Profile },
  { path: '', component: FrontPage },
  { path: 'search', component: Search }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);