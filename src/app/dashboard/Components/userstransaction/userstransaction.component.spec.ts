import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstransactionComponent } from './userstransaction.component';

describe('UserstransactionComponent', () => {
  let component: UserstransactionComponent;
  let fixture: ComponentFixture<UserstransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
