import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CardNewsComponent } from './card-news/card-news.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MenuComponent, CardNewsComponent
  ],
  exports: [MenuComponent, CardNewsComponent],
  
})
export class SharedModule { }
