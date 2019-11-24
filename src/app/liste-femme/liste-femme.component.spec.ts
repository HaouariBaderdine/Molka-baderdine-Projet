import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFemmeComponent } from './liste-femme.component';

describe('ListeFemmeComponent', () => {
  let component: ListeFemmeComponent;
  let fixture: ComponentFixture<ListeFemmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFemmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
