import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSuccessComponent } from './msg-success.component';

describe('MsgSuccessComponent', () => {
  let component: MsgSuccessComponent;
  let fixture: ComponentFixture<MsgSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MsgSuccessComponent]
    });
    fixture = TestBed.createComponent(MsgSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
