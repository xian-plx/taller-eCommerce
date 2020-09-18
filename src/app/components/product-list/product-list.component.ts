import { Component } from "@angular/core";

import { PRODUCTS } from "../../objects/mock-product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products = PRODUCTS;

  term: any;

  // share() {
  //   window.alert("The product has been shared!");
  // }

  // goToDetail(id: string) {

  // }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
