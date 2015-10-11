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

@Component({selector : 'my-dashboard'})
@View({
  templateUrl : 'app/dashboard.component.html',
  styleUrls : ['app/dashboard.component.css'],
  directives : [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ]
})
export class DashboardComponent {
  heroes: Hero[];

  constructor(private _heroService: HeroService, private _router: Router) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
  }

  gotoDetail(hero: Hero) {
    this._router.navigate([ `/${Routes.detail.as}`, {id : hero.id} ]);
  }
}
