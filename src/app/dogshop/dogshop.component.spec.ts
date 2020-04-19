import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogshopComponent } from './dogshop.component';

describe('DogshopComponent', () => {
  let component: DogshopComponent;
  let fixture: ComponentFixture<DogshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
