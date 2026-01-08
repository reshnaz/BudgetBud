import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGrid } from './account-grid';

describe('AccountGrid', () => {
  let component: AccountGrid;
  let fixture: ComponentFixture<AccountGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
