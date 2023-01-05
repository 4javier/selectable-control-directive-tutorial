import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialControlsComponent } from './material-controls.component';

describe('MaterialControlsComponent', () => {
  let component: MaterialControlsComponent;
  let fixture: ComponentFixture<MaterialControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
