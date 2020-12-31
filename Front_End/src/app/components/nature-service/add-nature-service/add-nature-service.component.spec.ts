import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNatureServiceComponent } from './add-nature-service.component';

describe('AddNatureServiceComponent', () => {
  let component: AddNatureServiceComponent;
  let fixture: ComponentFixture<AddNatureServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNatureServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNatureServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
