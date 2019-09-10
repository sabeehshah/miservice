import { CreateFormComponent } from './create-form/create-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdpostPage } from './adpost.page';

const routes: Routes = [
  {
    path: '',
    component: AdpostPage
  },
  {
    path:'create',
    component:CreateFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdpostPage,CreateFormComponent]
})
export class AdpostPageModule {}
