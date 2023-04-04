//code adds an event emitter called `taskComplete` that will emit an event when the `loadingDone` 
// input changes to `true`.

import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() loadingDone = false;
  @Output() taskComplete = new EventEmitter<boolean>();

  @HostBinding('hidden') get isHidden() {
    return this.loadingDone;
  }

  ngOnChanges() {
    if (this.loadingDone) {
      this.taskComplete.emit(true);
    }
  }
}
