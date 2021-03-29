import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Heroe[] = [];

  constructor(private http: HttpClient) {
    this.cargar_heroes();
   }

  traer_detalles(id: string): any{
    return this.http.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
  }

  cargar_heroes(): void{
     this.http.get<Heroe[]>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe((res: Heroe[]) => {
      this.heroes = res;

    });
  }
}
