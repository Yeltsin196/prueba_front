import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselQuoteComponent } from './carousel-quote.component';

describe('CarouselQuoteComponent', () => {
  let component: CarouselQuoteComponent;
  let fixture: ComponentFixture<CarouselQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
