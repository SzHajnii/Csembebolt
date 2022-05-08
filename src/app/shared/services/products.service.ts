
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';


import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  collection = 'Termekek';


  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  loadImages(kep: string){
    return this.storage.ref(kep).getDownloadURL();
  }

  getAll() {
    return this.afs.collection<Product>(this.collection).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Product>(this.collection).doc(id).valueChanges();
  }


}
