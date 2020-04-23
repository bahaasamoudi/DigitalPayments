import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScantopurchaseComponent } from './scantopurchase.component';

describe('ScantopurchaseComponent', () => {
  let component: ScantopurchaseComponent;
  let fixture: ComponentFixture<ScantopurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScantopurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScantopurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
