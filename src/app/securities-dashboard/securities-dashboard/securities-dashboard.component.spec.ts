import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesDashboardComponent } from './securities-dashboard.component';

describe('SecuritiesDashboardComponent', () => {
  let component: SecuritiesDashboardComponent;
  let fixture: ComponentFixture<SecuritiesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
