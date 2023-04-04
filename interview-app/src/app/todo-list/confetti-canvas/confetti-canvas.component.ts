import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-confetti-canvas',
  templateUrl: './confetti-canvas.component.html',
  styleUrls: ['./confetti-canvas.component.scss'],
})
export class ConfettiCanvasComponent implements AfterViewInit {
  @ViewChild('confettiCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit() {
    const context = this.canvas.nativeElement.getContext('2d');
    if (context) {
      this.ctx = context;
    }
  }

  fireConfetti() {
    // Adjust these values for more confetti, different spread, etc.
    const particleCount = 100;
    const spread = 70;
    const originY = 0.6;

    for (let i = 0; i < particleCount; i++) {
      // Create a confetti particle and draw it on the canvas
    }
  }
}
