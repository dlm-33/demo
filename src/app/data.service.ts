import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Account, Accounts } from './models/account';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { 
  }

  getAccounts(sortingField:string = "", sortingDir: string = ""): Observable<Account[]>{
    // Simulation of data
    if(sortingField == "" && sortingDir == ""){
      return of(Accounts);
    } else {
      
      return of(Accounts.sort((first, second) => {
        if(sortingField == 'number'){
          if(sortingDir == 'asc'){
            if(first.number > second.number){
              return 1;
            }else {
              return -1;
            }
          } else {
            if(first.number < second.number){
              return 1;
            }else {
              return -1;
            }
          }
        } else {
          if(sortingDir == 'asc'){
            if(first.balance > second.balance){
              return 1;
            }else {
              return -1;
            }
          } else {
            if(first.balance < second.balance){
              return 1;
            }else {
              return -1;
            }
          }
        }
      }));
    }
  }
}
