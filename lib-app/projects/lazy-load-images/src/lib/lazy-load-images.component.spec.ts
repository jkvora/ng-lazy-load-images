import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadImagesComponent } from './lazy-load-images.component';

describe('LazyLoadImagesComponent', () => {
  let component: LazyLoadImagesComponent;
  let fixture: ComponentFixture<LazyLoadImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
