import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../case.service';
import { Case } from '../Case';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers :[CaseService] 
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private caseService: CaseService) { }

  ngOnInit() {
    this.getCase();
  }
  case: Case;
  getCase():void {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this.case = this.caseService.getCase(id);
  }

}
