import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/information/information.module').then((m) => m.InformationModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule)
  },
  
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule)
  },
  
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then((m) => m.RegistrationModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'not-found', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) },
  { path: 'information', loadChildren: () => import('./pages/information/information.module').then(m => m.InformationModule) },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'/notfound',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
