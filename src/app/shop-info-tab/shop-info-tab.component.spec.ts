import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInfoTabComponent } from './shop-info-tab.component';

describe('ShopInfoTabComponent', () => {
  let component: ShopInfoTabComponent;
  let fixture: ComponentFixture<ShopInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
