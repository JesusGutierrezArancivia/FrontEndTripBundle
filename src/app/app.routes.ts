<<<<<<< HEAD
import { Routes } from '@angular/router';

export const routes: Routes = [];
=======
import { Routes } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import path from 'path';
import { Component } from '@angular/core';
import { InsertarCityComponent } from './components/city/insertar/insertar.component';
import { InsertarFaunaComponent } from './components/fauna/insertar/insertar.component';
import { InsertarFloraComponent } from './components/flora/insertar/insertar.component';
import { InsertarReservaComponent } from './components/reserve/insertar/insertar.component';
import { FaunaComponent } from './components/fauna/fauna.component';
import { FloraComponent } from './components/flora/flora.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { InsertarActivityComponent } from './components/activity/insertar/insertar.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'ciudades',
        component: CityComponent,
        children: [
            {
                path: 'nuevo', component: InsertarCityComponent
            },
            {
                path: 'ediciones/:id', component: InsertarCityComponent
            }
        ],
        canActivate: [seguridadGuard],

    },
    {
        path: 'actividades',
        component: ActivityComponent,
        children: [
            {
                path: 'nuevo', component: InsertarActivityComponent
            },
            {
                path: 'ediciones/:id', component: InsertarActivityComponent
            }
        ],
        canActivate: [seguridadGuard],
    },
    {
        path: 'faunas',
        component: FaunaComponent,
        children: [
            {
                path: 'nuevo', component: InsertarFaunaComponent
            },
            {
                path: 'ediciones/:id', component: InsertarFaunaComponent
            }
        ],
        canActivate: [seguridadGuard],

    },
    {
        path: 'floras',
        component: FloraComponent,
        children: [
            {
                path: 'nuevo', component: InsertarFloraComponent
            },
            {
                path: 'ediciones/:id', component: InsertarFloraComponent
            }
        ],
        canActivate: [seguridadGuard],

    },
    {
        path: 'reservas',
        component: ReserveComponent,
        children: [
            {
                path: 'nuevo', component: InsertarReservaComponent
            },
            {
                path: 'ediciones/:id', component: InsertarReservaComponent
            }
        ],
        canActivate: [seguridadGuard],

    },
    {
        path: 'homes',
        component: HomeComponent,
        canActivate: [seguridadGuard],
    },
];
>>>>>>> MarcosDev
