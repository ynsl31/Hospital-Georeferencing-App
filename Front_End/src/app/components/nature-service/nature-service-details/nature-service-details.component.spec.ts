import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureServiceDetailsComponent } from './nature-service-details.component';

describe('NatureServiceDetailsComponent', () => {
  let component: NatureServiceDetailsComponent;
  let fixture: ComponentFixture<NatureServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureServiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
