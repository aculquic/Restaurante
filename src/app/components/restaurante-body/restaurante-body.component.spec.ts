import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteBodyComponent } from './restaurante-body.component';

describe('RestauranteBodyComponent', () => {
  let component: RestauranteBodyComponent;
  let fixture: ComponentFixture<RestauranteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
