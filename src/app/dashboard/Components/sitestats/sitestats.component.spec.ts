import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitestatsComponent } from './sitestats.component';

describe('SitestatsComponent', () => {
  let component: SitestatsComponent;
  let fixture: ComponentFixture<SitestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
