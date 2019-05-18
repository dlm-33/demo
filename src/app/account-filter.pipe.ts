import { Pipe, PipeTransform } from '@angular/core';
import { Account } from './models/account';
@Pipe({
  name: 'accountFilter',
  pure: false
})
export class AccountFilterPipe implements PipeTransform {
  transform(items: Account[], showAll: boolean): any {
    if (!items || showAll) {
      return items;
    }
    return items.slice(0,3);
  }
}