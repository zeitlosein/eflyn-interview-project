import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfettiCanvasComponent } from './confetti-canvas.component';

describe('ConfettiCanvasComponent', () => {
  let component: ConfettiCanvasComponent;
  let fixture: ComponentFixture<ConfettiCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfettiCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfettiCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
