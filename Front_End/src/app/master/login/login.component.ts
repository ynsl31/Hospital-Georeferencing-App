import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private route : Router) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles);
      console.log(this.roles.includes('ROLE_ADMIN'));
      if(this.roles.includes('ROLE_ADMIN')){

        this.route.navigate(['adminboard'])
      }
     
    }
  }

  onSubmit() {

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data.accessToken);
        
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
       

        this.roles = this.tokenStorage.getUser().roles;
      
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    if(this.roles.includes('ROLE_ADMIN')){

      this.route.navigate(['adminboard'])
    }
   
  }

  reloadPage() {
    window.location.reload();
   }

}
