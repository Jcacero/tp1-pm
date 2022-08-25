import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorPage } from './autor.page';

const routes: Routes = [
  {
    path: '',
    component: AutorPage
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorPageRoutingModule {}
