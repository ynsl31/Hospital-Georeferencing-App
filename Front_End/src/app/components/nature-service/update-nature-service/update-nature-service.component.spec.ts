import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNatureServiceComponent } from './update-nature-service.component';

describe('UpdateNatureServiceComponent', () => {
  let component: UpdateNatureServiceComponent;
  let fixture: ComponentFixture<UpdateNatureServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNatureServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNatureServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
