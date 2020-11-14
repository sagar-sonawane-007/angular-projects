import { Routes } from '@angular/router';
import { Z_FULL_FLUSH } from 'zlib';
import { HomeComponent } from './home/home.component';
import { LineDataComponent } from './line-data/line-data.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/line',
        component: HomeComponent
    },
    {
        path: 'home/line/draft',
        component: LineDataComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];