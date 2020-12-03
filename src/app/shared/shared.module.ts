import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { TitleH1Component } from './components/titles/title-h1/title-h1.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';



@NgModule({
  declarations: [...fromComponents.components, CardUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
