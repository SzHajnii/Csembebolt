import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private userService: UserService,private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService.registrate(this.registrationForm.get('email')?.value, this.registrationForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User ={
        id: cred.user?.uid as string,
        email: this.registrationForm.get('email')?.value,
        address: this.registrationForm.get('address')?.value,
        name: {
          firstname: this.registrationForm.get('name.firstname')?.value,
          lastname: this.registrationForm.get('name.lastname')?.value
        },
      };
      this.userService.create(user).then(_ =>{
        console.log("User added successfully");
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.error(error);
    });
  }

}
