import { Injectable } from '@angular/core';
import { Case } from './case';
import { CASES } from './mock-cases';


@Injectable()
export class CaseService {

  constructor() { }

  getCases(): Case[] {
    return CASES;
  }
  getCase(id:number): Case {
    return CASES.find(hero=>hero.id === id);
  }

}
