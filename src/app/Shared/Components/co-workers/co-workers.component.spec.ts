import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoWorkersComponent } from './co-workers.component';

describe('CoWorkersComponent', () => {
  let component: CoWorkersComponent;
  let fixture: ComponentFixture<CoWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
