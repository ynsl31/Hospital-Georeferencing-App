import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMedecinComponent } from './board-medecin.component';

describe('BoardMedecinComponent', () => {
  let component: BoardMedecinComponent;
  let fixture: ComponentFixture<BoardMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
