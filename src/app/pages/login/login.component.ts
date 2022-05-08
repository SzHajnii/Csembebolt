import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'

import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private authService: AuthService, private auth: AngularFireAuth) { }

  email = new FormControl('');
  password = new FormControl('');


  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean=false;

  user$ = this.auth.user;


  ngOnInit(): void {
  }

  login(){
    this.loading = true;

    this.authService.login(this.email.value, this.password.value).then(cred =>{
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
        console.error(error);
        this.loading = false;
    });
  }
  
  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }

}
