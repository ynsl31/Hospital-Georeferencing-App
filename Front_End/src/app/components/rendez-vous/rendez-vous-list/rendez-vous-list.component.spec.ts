import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousListComponent } from './rendez-vous-list.component';

describe('RendezVousListComponent', () => {
  let component: RendezVousListComponent;
  let fixture: ComponentFixture<RendezVousListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
