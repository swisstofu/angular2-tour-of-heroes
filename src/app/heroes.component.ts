import {
  Component,
  OnInit,
  View,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/angular2';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {Routes} from './route.config';

@Component({selector : 'my-heroes'})
@View({
  templateUrl : 'app/heroes.component.html',
  directives : [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ],
  styleUrls : ['app/heroes.component.css']
})
export class HeroesComponent {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
  }

  getSelectedClass(hero: Hero) {
    return {'selected' : hero === this.selectedHero};
  }

  gotoDetail() {
    this._router
        .navigate([ `/${Routes.detail.as}`, {id : this.selectedHero.id} ]);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
