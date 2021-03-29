import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarApariencia'
})
export class BuscarAparienciaPipe implements PipeTransform {

  transform(value: any, arg:any): any {
    const buscarporapariencia=[]; 
    for(const recorrido of value ){
      if(recorrido.biography.alignment.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        buscarporapariencia.push(recorrido); 
      }
    }
    return buscarporapariencia; 
  }

}
