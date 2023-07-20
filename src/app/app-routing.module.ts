import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
  //   children: CONTENT_ROUTES
  // },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   loadChildren: './modules/auth/auth.module#AuthModule'
  // },
  // Fallback when no prior routes is matched
  {
    path: '**',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
