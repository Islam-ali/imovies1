import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCategoryComponent } from './media-category.component';

describe('MediaCategoryComponent', () => {
  let component: MediaCategoryComponent;
  let fixture: ComponentFixture<MediaCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
