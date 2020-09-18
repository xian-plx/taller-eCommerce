import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/objects/product";
import { GetterSetterService } from "src/app/services/getter-setter.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  productsInCart: Product[];

  constructor(private getterSetterService: GetterSetterService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.getterSetterService
      .findInCart()
      .subscribe((products) => (this.productsInCart = products));
  }

  deleteFromCart(id: String) {
    this.getterSetterService
      .deleteFromCart(id)
      .subscribe((products) => (this.productsInCart = products));
  }
}
