import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHoverCardComponent } from './movie-hover-card.component';

describe('MovieHoverCardComponent', () => {
  let component: MovieHoverCardComponent;
  let fixture: ComponentFixture<MovieHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHoverCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
