import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPostsComponent } from './carousel-posts.component';

describe('CarouselPostsComponent', () => {
  let component: CarouselPostsComponent;
  let fixture: ComponentFixture<CarouselPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
