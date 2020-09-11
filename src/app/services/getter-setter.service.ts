import { Injectable } from '@angular/core';
import { CLIENTS } from '../objects/mock-clients';
import { Client } from '../objects/client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {
  
  clients = CLIENTS;

  clientSesion = 0;

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }

  getClient(id: number): Observable<Client> {
    return of(this.clients.find(client => client.idClient === id));
  }
  
  getClientSesion() {
    return this.clientSesion;
  }

  setClientSesion(value){
    this.clientSesion = value;
  }

  createClient(client: Client): Observable<any> {
    localStorage.setItem("client", JSON.stringify(client));
    return of(this.clients.push(client));
  }

}
