import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent} from './detail/detail.component';
import { TempComponent } from './temp/temp.component';
import { IhdComponent } from './ihd/ihd.component';
import { IsComponent } from './is/is.component';
import { DQSignOffComponent } from './dqsign-off/dqsign-off.component';
import {FixInstrComponent} from './fix-instr/fix-instr.component';
import { FixManComponent } from './fix-man/fix-man.component';
import { FixRepComponent } from './fix-rep/fix-rep.component';
import { FixRepDisComponent } from './fix-rep-dis/fix-rep-dis.component';
import { IhCComponent } from './ih-c/ih-c.component';



const routes: Routes = [
  {path:'main', component: MainComponent},
  {path:'detail/:id',component: DetailComponent},
  {path:'temp',component:TempComponent},
  {path:'ImpHanDir',component:IhdComponent},
  {path:'ImpSignOff',component:IsComponent},
  {path:'FixInstr', component: FixInstrComponent},
  {path:'FixMan',component: FixManComponent},
  {path:'FixRepDis',component:FixRepDisComponent},
  {path:'FixRep',component:FixRepComponent},
  {path:'DQSignOff',component:DQSignOffComponent},
  {path:'ImpHanClo',component:IhCComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}