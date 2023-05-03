import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaduendesComponent } from './galeriaduendes.component';

describe('GaleriaduendesComponent', () => {
  let component: GaleriaduendesComponent;
  let fixture: ComponentFixture<GaleriaduendesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaduendesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaduendesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
