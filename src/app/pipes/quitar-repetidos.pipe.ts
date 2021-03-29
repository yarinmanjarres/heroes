import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitarRepetidos'
})
export class QuitarRepetidosPipe implements PipeTransform {

  transform(value: any): any {
    return value.filter((value:any, i:any, arr:any) => arr.findIndex( (data:any) => data.biography.alignment === value.biography.alignment) === i);
  }

}
