import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Details } from './views/details/details';
import { Login } from './views/auth/login/login';
import { Register } from './views/auth/register/register';

import { HousingLocation } from './views/housing-location/housing-location';
import { LocationForm } from './views/location-form/location-form';
import { NotFound } from './views/not-found/not-found';
import { Locations } from './views/locations/locations'

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  // ======== Public ========

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

  // ======== Propriétaire ========

  {
    path: 'my-locations',
    component: Locations,
    title: 'Mes locations',
    canActivate: [authGuard],
  },

  {
    path: 'my-locations/new',
    component: LocationForm,
    title: 'Nouvelle location',
    canActivate: [authGuard],
  },

  {
    path: 'my-locations/:id',
    component: LocationForm,
    title: 'Modifier location',
    canActivate: [authGuard],
  },

  { path: '**', component: NotFound, title: 'Page non trouvée' },

];

export default routes;
