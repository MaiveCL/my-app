import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Details } from './views/details/details';
import { Login } from './views/auth/login/login';
import { Register } from './views/auth/register/register';

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
