import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'solicitacoes',
    loadChildren: () => import('./pages/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'graficos-de-energia',
    loadChildren: () => import('./pages/energy-charts/energy-charts.module').then( m => m.EnergyChartsPageModule)
  },
  {
    path: 'consulta-de-medicao',
    loadChildren: () => import('./pages/measurement-query/measurement-query.module').then( m => m.MeasurementQueryPageModule)
  },
  {
    path: 'webhooks',
    loadChildren: () => import('./pages/webhooks/webhooks.module').then( m => m.WebhooksPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'configs',
    loadChildren: () => import('./pages/configs/configs.module').then( m => m.ConfigsPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./pages/finances/finances.module').then( m => m.FinancesPageModule)
  },
  {
    path: 'logs',
    loadChildren: () => import('./pages/logs/logs.module').then( m => m.LogsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
