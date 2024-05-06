import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledetailComponent } from './mobiledetail.component';

describe('MobiledetailComponent', () => {
  let component: MobiledetailComponent;
  let fixture: ComponentFixture<MobiledetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobiledetailComponent]
    });
    fixture = TestBed.createComponent(MobiledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
