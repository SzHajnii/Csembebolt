import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  constructor(private userservice: UserService, private auth: AngularFireAuth) {}

  currentUser?: any;
  
  ngOnInit(): void {
    this.currentUser = this.auth.user;
  }

  getCurrentUserDatas(){
    
  }

}
