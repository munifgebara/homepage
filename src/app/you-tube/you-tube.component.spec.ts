import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeComponent } from './you-tube.component';

describe('YouTubeComponent', () => {
  let component: YouTubeComponent;
  let fixture: ComponentFixture<YouTubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouTubeComponent]
    });
    fixture = TestBed.createComponent(YouTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
