import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: 'main', component: MainComponent 
    },
    {
        path: '**', component: LoginComponent   
    },
    
];
