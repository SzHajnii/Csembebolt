import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password:string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  registrate(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  
  logout() {
    return this.auth.signOut();
  }

  isUserloggedin(){
    return this.auth.user;
  }
  
}
