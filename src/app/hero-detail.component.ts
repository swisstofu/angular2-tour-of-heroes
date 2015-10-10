import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Routes} from './route.config';

@Component({selector: 'my-hero-detail'})
@View({
  templateUrl: 'app/hero-detail.component.html',
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;
  routes = Routes;

  constructor(private _heroService: HeroService,
    private _routeParams: RouteParams, private _router: Router) {

    let id = parseInt(_routeParams.get('id'), 10);
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  gotoHeroes() {
    this._router.navigate([`/${Routes.heroes.as}`]);
  }
}
