import { Routes } from '@angular/router';

// Importamos los componentes
import { HomeComponent } from './pages/home/home.component'
import { LabsComponent } from './pages/labs/labs.component'
import { PruebasEventComponent } from './pages/pruebas-event/pruebas-event.component'

// Enrutamos los componentes
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    },
    {
        path: 'pruebasEvent',
        component: PruebasEventComponent
    }
    
];

