import { Component, OnInit } from '@angular/core';
import { AsxService } from '../../services/asx.service';

@Component({
  selector: 'app-securities-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let company of companies">{{ company.asx }}: {{ company.name }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./securities-list.component.scss']
})
export class SecuritiesListComponent implements OnInit {

  companies: Array<any>;

  constructor(
    private asx: AsxService
  ) { }

  ngOnInit() {
    this.asx
      .getData()
      .subscribe((data) => {
        const companies = data.map((item) => {
          return {
            name: item['Company name'],
            asx: item['ASX code'],
            industry: item['GICS industry group']
          };
        });
        this.companies = this.sortCompanies(companies);
      });
  }

  sortCompanies(input: Array<any>) {
    const companies = Array.from(input);
    companies.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return companies;
  }

}
