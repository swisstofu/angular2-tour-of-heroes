import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero.model';
import {HeroService} from './hero.service';
import {Routes} from './route.config';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  directives: [CORE_DIRECTIVES]
})
export class DashboardComponent {
  heroes: Hero[];
  ngHeroes: Hero[] = [];

  constructor(private _heroService: HeroService) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
  }

  onChange(event, hero: Hero) {
    if (event.status) {
      this.ngHeroes.push(hero);
    } else {
      this.ngHeroes.splice(this.ngHeroes.indexOf(hero), 1);
    }
  }

  get ngHeroesString() { return this.ngHeroes.map((h) => h.name).join(', '); }
}
