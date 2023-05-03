import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriajabonesComponent } from './galeriajabones.component';

describe('GaleriajabonesComponent', () => {
  let component: GaleriajabonesComponent;
  let fixture: ComponentFixture<GaleriajabonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriajabonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriajabonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
