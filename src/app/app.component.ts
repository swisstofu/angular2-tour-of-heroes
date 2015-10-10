import {View, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({selector : 'my-app'})
@View({
  directives : [ CORE_DIRECTIVES, ROUTER_DIRECTIVES ],
  templateUrl : 'app/app.component.html',
  styleUrls : ['app/app.component.css']
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
  public routes = Routes;
}
