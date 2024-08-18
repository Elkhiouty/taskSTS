import { EventEmitter } from "@angular/core";
import { cProduct, product } from "../products/products-model";


export class cartService{
  private cartProducts : cProduct[] =[];
  public productAddedToCart = new EventEmitter<cProduct[]>();

  public addProductToCart = (product:product) => {
    const newProduct = new cProduct(
      product.id,
      product.title,
      product.image,
      product.price,
      1
    );
    var i=null;
    this.cartProducts.forEach((cproduct,index) => {
      if (cproduct.id==product.id){
        newProduct.count = cproduct.count +1;
        i=index;
      }
    });
    if(i == null)
      this.cartProducts.push(newProduct);
    else
      this.cartProducts.splice(i,1,newProduct);
    this.productAddedToCart.emit(this.cartProducts);
  }

  public removeProductFromCart = (i:number,f:number=1) =>{
    if((!(--this.cartProducts[i].count))||(!f))
      this.cartProducts.splice(i,1);
    this.productAddedToCart.emit(this.cartProducts);
  }

  public getCartProducts(){
    return this.cartProducts.slice();
  }
}
