import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { UserComponent } from './components/user/user.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { CartComponent } from './components/cart/cart.component';
import { OffersComponent } from './components/offers/offers.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    UserComponent,
    SearcherComponent,
    CartComponent,
    OffersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/