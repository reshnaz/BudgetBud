import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressGauge } from './progress-gauge';

describe('ProgressGauge', () => {
  let component: ProgressGauge;
  let fixture: ComponentFixture<ProgressGauge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressGauge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressGauge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
