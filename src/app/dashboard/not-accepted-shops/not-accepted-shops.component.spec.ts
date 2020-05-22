import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAcceptedShopsComponent } from './not-accepted-shops.component';

describe('NotAcceptedShopsComponent', () => {
  let component: NotAcceptedShopsComponent;
  let fixture: ComponentFixture<NotAcceptedShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAcceptedShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAcceptedShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
