import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login page',
  },
  {
    path: 'register',
    component: Register,
    title: 'Register page',
  },
];

export default routes;
