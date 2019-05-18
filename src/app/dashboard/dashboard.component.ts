import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sortingField: string = null;
  sortingDir: string = null;
  public accounts: Account[];
  public showAll: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAccounts();    
  }

  getAccounts(): void {
    this.dataService.getAccounts().subscribe(accounts => this.accounts = accounts);
  }

  sortBy(sortField){
    if(this.sortingField != sortField){
      this.sortingField = sortField;
    } 
    console.log(this.sortingField)
    this.updateDir();
    this.dataService.getAccounts(this.sortingField, this.sortingDir).subscribe(accounts => this.accounts = accounts);
  }

  public toggleShow(){
    this.showAll = !this.showAll;
  }

  private updateDir(){
    if(this.sortingDir == 'asc'){
      this.sortingDir = 'desc';
    } else {
      this.sortingDir = 'asc';
    }
  }
}