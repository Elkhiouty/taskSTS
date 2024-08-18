import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { ProductComponent } from "../products/product/product.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import productsService from '../products/products-service';
import { cProduct, product } from '../products/products-model';
import { cartService } from '../cart/cart-service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ProductsComponent, ProductComponent, RouterOutlet, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
products : cProduct[] = [];
count !: number;

constructor(private _cartService:cartService) {
}


calc = ()=>{
  this.count = 0;
  this.products.forEach((product)=>{
    this.count += product.count;
  })
}

sub = ()=>{
  this._cartService.productAddedToCart.subscribe((product)=>{
    this.products = product;
    this.calc();
  })
}
  ngOnInit(): void {
    this.products=this._cartService.getCartProducts();
    this.calc();
    this.sub();
  }
}
