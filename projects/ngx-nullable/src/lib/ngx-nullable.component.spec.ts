import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNullableComponent } from './ngx-nullable.component';

describe('NgxNullableComponent', () => {
  let component: NgxNullableComponent;
  let fixture: ComponentFixture<NgxNullableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNullableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxNullableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
