import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSliderComponent } from './popular-slider.component';

describe('PopularSliderComponent', () => {
  let component: PopularSliderComponent;
  let fixture: ComponentFixture<PopularSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
