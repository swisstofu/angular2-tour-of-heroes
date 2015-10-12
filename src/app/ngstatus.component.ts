import {Component, EventEmitter, Output, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'ngstatus',
  templateUrl: 'app/ngstatus.component.html',
  directives: [CORE_DIRECTIVES],
  styleUrls: ['app/ngstatus.component.css']
})
export class NgStateComponent {
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

export interface NgChangeEvent {
  state: boolean;
}