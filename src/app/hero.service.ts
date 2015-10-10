import {HEROES} from './mock-heroes';
import {Hero} from "./hero";

export class HeroService {
  getHeroes(): Promise<Hero[]> { return Promise.resolve(HEROES); }

  getHero(id: number): Promise<Hero> {
    return Promise.resolve(HEROES)
        .then((heroes) => heroes.filter((h) => h.id === id)[0]);
  }
}
