import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPartnesComponent } from './grid-partnes.component';

describe('GridPartnesComponent', () => {
  let component: GridPartnesComponent;
  let fixture: ComponentFixture<GridPartnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPartnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPartnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
