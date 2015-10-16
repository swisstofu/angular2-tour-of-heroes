import {Component, EventEmitter, Output, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'status',
  templateUrl: 'app/status.component.html',
  directives: [CORE_DIRECTIVES],
  styleUrls: ['app/status.component.css']
})
export class StatusComponent {
  isAngular: boolean;
  @Input()
      active: boolean;
  @Output()
      ngchange: EventEmitter;
  constructor() {
    this.ngchange = new EventEmitter();
    this.active = true;
    this.isAngular = false;
  }

  onClick() {
    if (!this.active) return;
    this.isAngular = !this.isAngular;
    this.ngchange.next({state: this.isAngular});
  }
}

export interface StatusChangeEvent {
  state: boolean;
}