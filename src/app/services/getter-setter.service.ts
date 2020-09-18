import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CLIENTS } from "../objects/mock-clients";
import { Client } from "../objects/client";
import { Product } from "../objects/product";
import { PRODUCTS } from "../objects/mock-product";
import { ProductDetail } from "../objects/productDetail";
import { PRODUCTSDETAIL } from "../objects/mock-productDetail";

@Injectable({
  providedIn: "root",
})
export class GetterSetterService {
  client: Client;

  product: Product;

  productDetail: ProductDetail;

  clientList = CLIENTS;

  clientSesion = 0;

  productList = PRODUCTS;

  productDetailList = PRODUCTSDETAIL;

  constructor() {}

  getClients(): Observable<Client[]> {
    return of(this.clientList);
  }

  getClient(id: number): Observable<Client> {
    return of(this.clientList.find((client) => client.idClient === id));
  }

  getClientSesion() {
    return this.clientSesion;
  }

  setClientSesion(value) {
    this.clientSesion = value;
  }

  createClient(client: Client): Observable<any> {
    localStorage.setItem("client", JSON.stringify(client));
    return of(this.clientList.push(client));
  }

  addToTheCart(idProduct: String): Observable<any> {
    var carrito = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : { productsInCart: [] };

    carrito.productsInCart.push(idProduct);

    return of(localStorage.setItem("cart", JSON.stringify(carrito)));
  }

  findInCart(): Observable<any> {
    var carrito = JSON.parse(localStorage.getItem("cart"));

    var productInCart: Product[] = [];

    for (var product of this.productList) {
      for (var iterator of carrito.productsInCart) {
        if (product.id === iterator) {
          productInCart.push(product);
        }
      }
    }

    return of(productInCart);
  }

  deleteFromCart(id: String): Observable<any> {
    var carrito = JSON.parse(localStorage.getItem("cart"));

    var newArray = [];

    var productInCart: Product[] = [];

    for (let i = 0; i < carrito.productsInCart.length; i++) {
      if (id === carrito.productsInCart[i]) {
        carrito.productsInCart.splice(i, 0);
      } else {
        newArray.push(carrito.productsInCart[i]);
      }
    }

    carrito.productsInCart = newArray;

    for (var product of this.productList) {
      for (var iterator of carrito.productsInCart) {
        if (product.id === iterator) {
          productInCart.push(product);
        }
      }
    }

    localStorage.setItem("cart", JSON.stringify(carrito))

    return of(productInCart);
  }
}
