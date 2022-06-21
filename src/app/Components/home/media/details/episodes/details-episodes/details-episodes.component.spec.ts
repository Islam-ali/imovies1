import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEpisodesComponent } from './details-episodes.component';

describe('DetailsEpisodesComponent', () => {
  let component: DetailsEpisodesComponent;
  let fixture: ComponentFixture<DetailsEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
