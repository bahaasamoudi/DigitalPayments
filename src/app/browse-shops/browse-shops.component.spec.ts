import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseShopsComponent } from './browse-shops.component';

describe('BrowseShopsComponent', () => {
  let component: BrowseShopsComponent;
  let fixture: ComponentFixture<BrowseShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
