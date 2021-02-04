import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title: string = 'Login';
  usuario: string = "lucas";
  senha:string = "123";
  public user;
  public password;

  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.user == this.usuario && this.password == this.senha){
      window.location.href = "contacts";
    }else{
      alert("Usuário ou Senha inválidos!");
    }
  }

}
