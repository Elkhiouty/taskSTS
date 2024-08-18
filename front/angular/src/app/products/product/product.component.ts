import { Component, Input, OnInit } from '@angular/core';
import { product } from '../products-model';
import productsService from '../products-service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() product !:product

  constructor(private _productService:productsService) {

  }
  ngOnInit(): void {

  }

  onSelect(){
    this._productService.addProductToCart(this.product);
  }

}
