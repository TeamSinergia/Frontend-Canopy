import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanopyAppComponent } from './modulos/canopy-app/canopy-app.component';
import { CanopyListComponent } from './modulos/canopy-list/canopy-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'canopy',
    pathMatch: 'full'
  },
  {
    path: 'canopy',
    component: CanopyListComponent
  },
  {
    path: 'canopyApp',
    component: CanopyAppComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
