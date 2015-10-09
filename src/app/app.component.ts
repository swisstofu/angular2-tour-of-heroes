import {View, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({ selector: 'my-app' })
@View({
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="routes.dashboard.link" class="router-link">Dashboard</a>
    <a [router-link]="routes.heroes.link" class="router-link">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  styleUrls: ['app/app.component.css']
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
  public routes = Routes;
}
