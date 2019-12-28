import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskTrasformer'
})
export class TaskTrasformerPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.charAt(0).toUpperCase() + value.slice(1) + args[0];
  }

}
