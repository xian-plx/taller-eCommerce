import { Component, OnInit } from '@angular/core';
import { Client } from '../../objects/client'
import { GetterSetterService } from '../../services/getter-setter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clients: Client[];
  
  mensajeLogin = '';

  clientSesion = 0;

  constructor(
    private getterSetterService: GetterSetterService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getClients();
  }

  iniciarSesion(user: string, passwd: string) {
    for (let i = 0; i < this.clients.length; i++) {
      if(user == this.clients[i].nombreClient){
        if(passwd == this.clients[i].pass){
          this.clientSesion = this.clients[i].idClient;
          this.getterSetterService.setClientSesion(this.clientSesion);
          return this.router.navigateByUrl('/user');
          return alert("patata")
        }else{
          return this.mensajeLogin = 'Contraseña incorrecta'
        }
      } else if(user == undefined || user == ''){
        this.mensajeLogin = 'Introduce un usuario'
      }else {
        this.mensajeLogin = 'Usuario incorrecto'
      }
      
    }
  }

  getClients() {
    this.getterSetterService.getClients()
      .subscribe(clients => this.clients = clients);

  }
}
