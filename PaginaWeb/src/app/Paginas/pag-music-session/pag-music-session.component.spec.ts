import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagMusicSessionComponent } from './pag-music-session.component';

describe('PagMusicSessionComponent', () => {
  let component: PagMusicSessionComponent;
  let fixture: ComponentFixture<PagMusicSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagMusicSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagMusicSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
