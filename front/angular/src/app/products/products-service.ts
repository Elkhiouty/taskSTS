import { EventEmitter, Injectable } from "@angular/core";
import { category, product } from "./products-model";
import { cartService } from "../cart/cart-service";
import { HttpClient } from "@angular/common/http";
import { productsResponse, serverResponse } from "../serverResponse";
import { map } from "rxjs";

@Injectable()
export default class productsService{

  constructor(private _cartService:cartService, private _http:HttpClient) {
  }

  getProducts(){
    return this._http.get<serverResponse<product[]>>('https://localhost:7005/product/all')
    .pipe(map(res=>{
      const prods :product[]=[]
      res.data.forEach(element => {
        prods.push({id:element.id.toString(),image:element.image,title:element.title,price:element.price})
      });
      return prods
    }))
  }

  getCategories(){
    return this._http.get<serverResponse<category[]>>('https://localhost:7005/category')
  }

  getProductsByCategories(cat:number){
    return this._http.get<serverResponse<product[]>>('https://localhost:7005/product/category/'+cat)
    .pipe(map(res=>{
      const prods :product[]=[]
      res.data.forEach(element => {
        prods.push({id:element.id.toString(),image:element.image,title:element.title,price:element.price})
      });
      return prods
    }))
  }

  addProductToCart(product:product){
    this._cartService.addProductToCart(product);
  }
}
