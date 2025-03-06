import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HassHomeComponent } from './hass-home.component';

const tripPassagesRoute: Routes = [
  {
    component: HassHomeComponent,
    data: {},
    path: '',
    resolve: {},
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(tripPassagesRoute)],
})
export class HasssRoutingModule {}
