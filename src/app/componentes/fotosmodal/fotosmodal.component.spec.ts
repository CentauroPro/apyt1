import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosmodalComponent } from './fotosmodal.component';

describe('FotosmodalComponent', () => {
  let component: FotosmodalComponent;
  let fixture: ComponentFixture<FotosmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
