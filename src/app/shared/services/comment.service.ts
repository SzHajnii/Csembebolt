import { Injectable } from '@angular/core';
import { Comment } from '../../shared/models/Comment'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  collectionName = 'Komment'

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment) {
    comment.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }
}
