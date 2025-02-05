import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { NewModel } from 'src/app/models/NewModel';


@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
  imports: [CommonModule ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton,IonIcon],
})
export class CardNewsComponent  implements OnInit {

  @Input() newData!: NewModel;
  @Input() onDelete!: () => void; 

  constructor() { }

  ngOnInit() {}

}
