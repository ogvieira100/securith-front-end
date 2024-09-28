import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj',
  standalone: true,
})
export class CnpjPipe implements PipeTransform {

  transform(value: string | null): string | null {
    if (value) {
        return value.replace(/(\w{2})(\w{3})(\w{3})(\w{4})(\w+)/ig, '$1.$2.$3/$4-$5');
    }
    return null;
  }

}
