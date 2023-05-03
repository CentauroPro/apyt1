import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriavelasComponent } from './galeriavelas.component';

describe('GaleriavelasComponent', () => {
  let component: GaleriavelasComponent;
  let fixture: ComponentFixture<GaleriavelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriavelasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriavelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
