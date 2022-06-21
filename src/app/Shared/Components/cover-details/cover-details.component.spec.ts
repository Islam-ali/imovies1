import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverDetailsComponent } from './cover-details.component';

describe('CoverDetailsComponent', () => {
  let component: CoverDetailsComponent;
  let fixture: ComponentFixture<CoverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
