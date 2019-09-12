import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesSingleComponent } from './securities-single.component';

describe('SecuritiesSingleComponent', () => {
  let component: SecuritiesSingleComponent;
  let fixture: ComponentFixture<SecuritiesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
