import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { GetterSetterService } from "src/app/services/getter-setter.service";

import { PRODUCTS } from "../../objects/mock-product";
import { PRODUCTSDETAIL } from "../../objects/mock-productDetail";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;

  productsDetail = PRODUCTSDETAIL;

  chosenProduct;

  constructor(
    private route: ActivatedRoute,
    private getterSetterService: GetterSetterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let idProduct = params.get("id");
      this.choosedProduct(idProduct);
      //console.log(this.administrar);
    });
  }

  choosedProduct(idProduct: String) {
    for (var product of this.productsDetail) {
      if (product.id === idProduct) {
        this.chosenProduct = product;
      }
    }
  }

  saveCart(idProduct: String) {
    this.getterSetterService.addToTheCart(idProduct);
  }

  goBack(): void {
    this.location.back();
  }
}
