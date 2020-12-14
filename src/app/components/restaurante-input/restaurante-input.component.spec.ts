import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteInputComponent } from './restaurante-input.component';

describe('RestauranteInputComponent', () => {
  let component: RestauranteInputComponent;
  let fixture: ComponentFixture<RestauranteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
