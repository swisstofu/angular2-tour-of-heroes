import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

export const Routes = {
  dashboard : {
    path : '/',
    as : 'Dashboard',
    component : DashboardComponent,
    link : ['/Dashboard']
  },
  heroes : {
    path : '/heroes',
    as : 'Heroes',
    component : HeroesComponent,
    link : ['/Heroes']
  },
  detail : {
    path : '/detail/:id',
    as : 'Detail',
    component : HeroDetailComponent,
    link : ['/Detail']
  }
};

export const APP_ROUTES = Object.keys(Routes).map((name) => Routes[name]);