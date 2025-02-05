import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewModel } from '../models/NewModel';
import { newsData } from '../dummy.data';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  private newSource = new BehaviorSubject<NewModel[]>(newsData);
  newSource$ = this.newSource.asObservable();

  constructor(private firestore: Firestore) {}

  async addNewModel(newModel: NewModel): Promise<string> {
    try {
      const numImgRandom = Math.floor(Math.random() * 5) + 1;
      newModel.image = `assets/img${numImgRandom}.png`;

      // 🔹 Agregar a Firestore
      const docNewsRef = await addDoc(collection(this.firestore, 'newsModels'), newModel);

      // 🔹 Agregar el ID generado por Firebase al objeto
      newModel.id = docNewsRef.id;

      // 🔹 Actualizar el estado después de que la operación sea exitosa
      const updatedNews = [...this.newSource.value, newModel];
      this.newSource.next(updatedNews);

      console.log(`✅ Noticia agregada con ID: ${docNewsRef.id}`);
      return docNewsRef.id;
    } catch (error) {
      console.error('❌ Error al agregar noticia:', error);
      throw new Error('Error al agregar noticia');
    }
  }

  async getAllNewModels(): Promise<NewModel[]> {
    try {
      const newsModelCollection = collection(this.firestore, 'newsModels');
      const snapshot = await getDocs(newsModelCollection);

      const news = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as NewModel)
      }));

      this.newSource.next(news);

      return news;
    } catch (error) {
      console.error('❌ Error al obtener noticias:', error);
      return [];
    }
  }

  async deleteNewModel(id: string): Promise<void> {
    try {
      // 🔹 Eliminar de Firestore
      const docRef = doc(this.firestore, 'newsModels', id);
      await deleteDoc(docRef);
      console.log(`🗑️ Documento ${id} eliminado con éxito`);

      // 🔹 Actualizar el estado después de la eliminación
      const updatedNews = this.newSource.value.filter(n => n.id !== id);
      this.newSource.next(updatedNews);
      
    } catch (error) {
      console.error('❌ Error al eliminar documento:', error);
      throw new Error('Error al eliminar noticia');
    }
  }

}
