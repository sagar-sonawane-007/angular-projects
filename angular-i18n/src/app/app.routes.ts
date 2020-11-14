import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineDataComponent } from './line-data/line-data.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            name: 'home',
            route: '#'
        },
        pathMatch: 'full'
    },
    {
        path: 'home',
        data: {
            name: 'home',
            route: 'home'
        },
        component: HomeComponent,
        children: [
            {
                path: 'line',
                data: {
                    name: 'line',
                    route: 'home/line'
                },
                component: HomeComponent,
                children: [
                    {
                        path: 'draft',
                        data: {
                            name: 'createDraft',
                            route: 'home/line/draft'
                        },
                        component: LineDataComponent
                    },
                    {
                        path: 'draft/:id',
                        data: {
                            name: 'editDraft',
                            route: 'home/line/draft'
                        },
                        component: LineDataComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];