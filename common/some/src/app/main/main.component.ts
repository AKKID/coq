import { Component, OnInit } from '@angular/core';

import { Case } from '../case';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  cases: Case[];
  private caseService = new CaseService;
  getCases(): void {
    this.cases = this.caseService.getCases();
  }
  ngOnInit() {
    this.getCases();
  }

}
