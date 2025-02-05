import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddNewPageRoutingModule } from './add-new-routing.module';
import { AddNewPage } from './add-new.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    ExploreContainerComponentModule,
    AddNewPageRoutingModule
  ],
  declarations: [AddNewPage]
})
export class AddNewPageModule {}
