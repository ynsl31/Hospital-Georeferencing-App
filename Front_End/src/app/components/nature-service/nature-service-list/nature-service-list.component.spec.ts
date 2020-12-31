import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureServiceListComponent } from './nature-service-list.component';

describe('NatureServiceListComponent', () => {
  let component: NatureServiceListComponent;
  let fixture: ComponentFixture<NatureServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
