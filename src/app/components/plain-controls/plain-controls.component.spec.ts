import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainControlsComponent } from './plain-controls.component';

describe('PlainControlsComponent', () => {
  let component: PlainControlsComponent;
  let fixture: ComponentFixture<PlainControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PlainControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
