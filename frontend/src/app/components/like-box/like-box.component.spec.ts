import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeBoxComponent } from './like-box.component';

describe('LikeBoxComponent', () => {
  let component: LikeBoxComponent;
  let fixture: ComponentFixture<LikeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
