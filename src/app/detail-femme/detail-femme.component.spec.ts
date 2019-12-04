import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFemmeComponent } from './detail-femme.component';

describe('DetailFemmeComponent', () => {
  let component: DetailFemmeComponent;
  let fixture: ComponentFixture<DetailFemmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFemmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
