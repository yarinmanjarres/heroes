import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class TitulosPipe implements PipeTransform {

  transform(value: string): string {
    let encabezado = 'Album';

    return encabezado;
  }

}
