import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaRedePage } from './mapa-rede.page';

const routes: Routes = [
  {
    path: '',
    component: MapaRedePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaRedePageRoutingModule {}
