import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadimageComponent } from './lazyloadimage.component';

describe('LazyloadimageComponent', () => {
  let component: LazyloadimageComponent;
  let fixture: ComponentFixture<LazyloadimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
