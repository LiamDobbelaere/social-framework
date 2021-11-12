import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTabComponent } from './expandable-tab.component';

describe('ExpandableTabComponent', () => {
  let component: ExpandableTabComponent;
  let fixture: ComponentFixture<ExpandableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
