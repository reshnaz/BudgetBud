import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreBtn } from './load-more-btn';

describe('LoadMoreBtn', () => {
  let component: LoadMoreBtn;
  let fixture: ComponentFixture<LoadMoreBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadMoreBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMoreBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
