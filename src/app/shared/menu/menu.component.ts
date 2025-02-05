import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule, IonImg, IonHeader, IonTitle, IonToolbar],
})
export class MenuComponent  implements OnInit {

  logo: string = "assets/logo.png"

  constructor() { }

  ngOnInit() {}

}
