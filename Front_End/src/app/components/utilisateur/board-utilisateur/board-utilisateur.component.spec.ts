import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUtilisateurComponent } from './board-utilisateur.component';

describe('BoardUtilisateurComponent', () => {
  let component: BoardUtilisateurComponent;
  let fixture: ComponentFixture<BoardUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
