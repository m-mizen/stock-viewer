import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesGraphControlsComponent } from './securities-graph-controls.component';

describe('SecuritiesGraphControlsComponent', () => {
  let component: SecuritiesGraphControlsComponent;
  let fixture: ComponentFixture<SecuritiesGraphControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesGraphControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesGraphControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
