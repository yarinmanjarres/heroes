import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  buscarpornombre=''; 
  buscarporapariencia=''; 
  constructor(public servicioHeroe: HeroesService) {
    console.log('holiiis');
   }

  ngOnInit(): void {
  }

}
