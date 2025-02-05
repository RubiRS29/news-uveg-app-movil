import { Component } from '@angular/core';
import { NewModel } from '../models/NewModel';
import { newsData } from '../dummy.data';
import { NewServiceService } from '../services/new-service.service';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-main',
  templateUrl: 'new-main.page.html',
  styleUrls: ['new-main.page.scss'],
  standalone: false,
})
export class NewMainPage {

  newsModelList: NewModel[] = [];
  private subscription!: Subscription;

  constructor(
    private newsService: NewServiceService, 
    private toastController: ToastController) {

  }

  ngOnInit() {
    this.subscription = this.newsService.newSource$.subscribe(news => {
      this.newsModelList = news;
    });
    this.newsService.getAllNewModels();
  }

  getDeleteFunction(id: string | undefined) {
    return () => {
      if (id) { // Verifica que id no sea undefined
        this.deleteNew(id);
      } else {
        console.error('ID no válido para eliminar.');
      }
    };
  }

  async deleteNew(id: string) {
    console.log('Eliminando noticia con id:', id);
    this.showToast('Noticia eliminada con éxito!', 'danger');
    await this.newsService.deleteNewModel(id);
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom',
      icon: 'checkmark-circle'
    });

    await toast.present();
  }

  ngOnDestroy() {
    // 🔹 Evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
