import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  detalles: any = '';
  constructor(
              private route: ActivatedRoute,
              private hs: HeroesService
              ) {
      this.route.params.subscribe(data => {
        this.hs.traer_detalles( data['id'] ).subscribe((res: any) => {
            this.detalles = res;
            console.log(this.detalles, 'holiiiis');
        });
      });
              }

  ngOnInit(): void {
  }

}
