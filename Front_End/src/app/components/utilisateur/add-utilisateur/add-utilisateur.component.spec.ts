import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilisateurComponent } from './add-utilisateur.component';

describe('AddUtilisateurComponent', () => {
  let component: AddUtilisateurComponent;
  let fixture: ComponentFixture<AddUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
