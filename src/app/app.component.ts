import {View, Component, CORE_DIRECTIVES, bind} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import {HeroService} from "./hero.service";
import {
    routerBindings,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

@Component({
  selector : 'my-app',
  directives : [ CORE_DIRECTIVES, ROUTER_DIRECTIVES ],
  templateUrl : 'app/app.component.html',
  styleUrls : ['app/app.component.css'],
  viewBindings: [
    HeroService,
    bind(LocationStrategy).toClass(HashLocationStrategy)
  ]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  title = 'Tour of Heroes';
  routes = Routes;
}
