import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shared/upload-product',
    pathMatch: 'full'
  },
  {
    path: 'shared',
    children: [
      {
        path: 'upload-product',
        component: UploadImageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports :[RouterModule]
})
export class SharedRoutingModule { }
