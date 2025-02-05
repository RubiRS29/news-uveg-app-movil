import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewServiceService } from '../services/new-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-new',
  templateUrl: 'add-new.page.html',
  styleUrls: ['add-new.page.scss'],
  standalone: false,
})
export class AddNewPage {

  addNew!: FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private newService: NewServiceService,
    private toastController: ToastController) { }

  ngOnInit() {
    this.addNew = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.addNew.valid) {
      try {

        const docId = await this.newService.addNewModel(this.addNew.value);

        this.showToast('✅ Noticia agregada con éxito!', 'success');
        this.addNew.reset();
      } catch (error) {
        console.error('❌ Error:', error);
      }

    } 
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

}
