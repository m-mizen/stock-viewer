import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesGraphComponent } from './securities-graph.component';

describe('SecuritiesGraphComponent', () => {
  let component: SecuritiesGraphComponent;
  let fixture: ComponentFixture<SecuritiesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
