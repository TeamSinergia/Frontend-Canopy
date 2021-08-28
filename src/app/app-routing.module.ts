import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanopyAppComponent } from './modulos/canopy-app/canopy-app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'canopy',
    pathMatch: 'full'
  },
  {
    path: 'canopy',
    component: CanopyAppComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
