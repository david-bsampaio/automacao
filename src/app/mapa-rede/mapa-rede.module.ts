import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { MapaRedePageRoutingModule } from './mapa-rede-routing.module';

import { MapaRedePage } from './mapa-rede.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaRedePageRoutingModule,
    HttpClientModule
  ],
  declarations: [MapaRedePage]
})
export class MapaRedePageModule {}
