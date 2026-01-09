import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBtn } from './update-btn';

describe('UpdateBtn', () => {
  let component: UpdateBtn;
  let fixture: ComponentFixture<UpdateBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
