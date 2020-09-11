import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CLIENTS } from '../../objects/mock-clients';
import { GetterSetterService } from 'src/app/services/getter-setter.service';
import { Client } from 'src/app/objects/client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  clients = CLIENTS;

  show = false

  constructor(
    private gettersetterService : GetterSetterService,
    private location: Location
    ) { 
   }

  ngOnInit(): void {
  }

  add(nombre: string, passwd: string) {
    let array: Client;
    let id = this.genID(this.clients)
    nombre = nombre.trim();
    passwd = passwd.trim();

    if(!nombre){
      return alert("Error, debe introducirse un nombre");
    } 
    
    if(!passwd){
      return alert("Error, debe introducirse una contraseña")
    }

    
    if(!nombre || !passwd || !id){
      return ;
    }
    array = { idClient: id, nombreClient: nombre, pass: passwd};

    this.gettersetterService.createClient(array);

    this.show = true;

  }

  goBack(): void {
    this.location.back();
  }

  genID(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.idClient)) + 1 : 1;
  }

}
