import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JabonesComponent } from './jabones.component';

describe('JabonesComponent', () => {
  let component: JabonesComponent;
  let fixture: ComponentFixture<JabonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JabonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JabonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
