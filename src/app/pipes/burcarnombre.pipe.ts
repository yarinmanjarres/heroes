import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'burcarnombre'
})
export class BurcarnombrePipe implements PipeTransform {

  transform(value: any, arg:any): any {
    const buscarpornombre=[]; 
    for(const recorrido of value ){
      if(recorrido.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        buscarpornombre.push(recorrido); 
      }
    }
    return buscarpornombre; 
  }


}
