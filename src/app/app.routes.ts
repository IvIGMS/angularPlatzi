import { Routes } from '@angular/router';

// Importamos los componentes
import { HomeComponent } from './pages/home/home.component'
import { LabsComponent } from './pages/labs/labs.component'

// Enrutamos los componentes
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    }
];

