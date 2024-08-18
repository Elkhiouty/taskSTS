import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import productsService from '../../products/products-service';
import { cProduct, fProduct, product } from '../../products/products-model';
import { CommonModule } from '@angular/common';
import { cartService } from '../cart-service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})

export class CartListComponent implements OnInit{
  products :fProduct[]=[];
  t:number =0;
  c:number = 0;

  constructor(private _cartServic:cartService) {}



  sum(count:number,price:number)
  {
    return +(count*price).toFixed(2)
  }

  modify(prod:cProduct){
    const el = {} as fProduct
    el.product = prod;
    el.total = this.sum(prod.count,prod.price);
    this.c += prod.count;
    this.t += el.total;
    this.products.push(el)
  }

  sub=()=>{
    this._cartServic.productAddedToCart.subscribe((products)=>{
      this.t=0;
      this.c=0;
      products.forEach((product)=>{
        this.modify(product);
      })
    })
  }

  ngOnInit(): void {
    this._cartServic.getCartProducts().forEach((prod)=>{
      this.modify(prod)
    });
    this.sub();
  }

  inc(prod:cProduct){
    this.products=[];
    this._cartServic.addProductToCart(new product(prod.id,prod.title,prod.image,prod.price))
}
dec(i:number){
  this.products=[];
  this._cartServic.removeProductFromCart(i);
}
remove(i:number){
  this.products=[];
  this._cartServic.removeProductFromCart(i,0);
}
}
