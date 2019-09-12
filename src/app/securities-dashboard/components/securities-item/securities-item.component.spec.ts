import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesItemComponent } from './securities-item.component';

describe('SecuritiesItemComponent', () => {
  let component: SecuritiesItemComponent;
  let fixture: ComponentFixture<SecuritiesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
