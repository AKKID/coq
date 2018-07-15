import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule }from './/app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { TempComponent } from './temp/temp.component';
import { IhdComponent } from './ihd/ihd.component';
import { IsComponent } from './is/is.component';
import { FixInstrComponent } from './fix-instr/fix-instr.component';
import { FixManComponent } from './fix-man/fix-man.component';
import { FixRepComponent } from './fix-rep/fix-rep.component';
import { FixRepDisComponent } from './fix-rep-dis/fix-rep-dis.component';
import { DQSignOffComponent } from './dqsign-off/dqsign-off.component';
import { IhCComponent } from './ih-c/ih-c.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    TempComponent,
    IhdComponent,
    IsComponent,
    FixInstrComponent,
    FixManComponent,
    FixRepComponent,
    FixRepDisComponent,
    DQSignOffComponent,
    IhCComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
