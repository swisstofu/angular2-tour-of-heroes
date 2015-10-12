import {bootstrap, bind} from 'angular2/angular2';

import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {routerBindings} from 'angular2/router';

bootstrap(AppComponent, [routerBindings(AppComponent)]);
