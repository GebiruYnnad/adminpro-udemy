import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
    declarations: [
        PagesComponent, 
        DashboardComponent,
        ProgressComponent,
        Graficas1Component, 
        IncrementadorComponent, 
        GraficaDonaComponent, AccountSettingsComponent, PromesasComponent, RxjsComponent
    ], 
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ], 
    imports: [
        SharedModule, 
        PAGES_ROUTES, 
        FormsModule, 
        ChartsModule
    ]
})
export class PageModule { }