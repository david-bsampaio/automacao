import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaRedePage } from './mapa-rede.page';

describe('MapaRedePage', () => {
  let component: MapaRedePage;
  let fixture: ComponentFixture<MapaRedePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaRedePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaRedePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
