import {
  Component,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  View
} from 'angular2/angular2';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Routes} from './route.config';
import {NgStateComponent, NgChangeEvent} from "./ngstatus.component";

@Component({selector : 'my-dashboard'})
@View({
  templateUrl : 'app/dashboard.component.html',
  styleUrls : ['app/dashboard.component.css'],
  directives : [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgStateComponent ]
})
export class DashboardComponent {
  heroes: Hero[];
  ngHeroes: Hero[] = [];

  constructor(private _heroService: HeroService, private _router: Router) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
  }

  onChange(event: NgChangeEvent, hero: Hero) {
    if (event.state) {
      this.ngHeroes.push(hero);
    } else {
      this.ngHeroes.splice(this.ngHeroes.indexOf(hero), 1);
    }
  }

  get ngHeroesString() {
    return this.ngHeroes.map((h) => h.name).join(', ');
  }
}
