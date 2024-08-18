import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import productsService from './products-service';
import { category, product } from './products-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products !: product[]
  categories :category[] = []
  constructor(private _productsService :productsService) {
  }

  clear(){
    [...this.categories,{id:0,title:'all'}].forEach(el=>{
      document.getElementById(el.title)?.classList.remove('active');
    })
  }

  getAll(){
    this._productsService.getProducts().subscribe(data =>{
      this.products = data;
    });
    this.clear();
    document.getElementById('all')?.classList.add('active')
  }

  ngOnInit(): void {
    this.getAll();
    this._productsService.getCategories().subscribe(data => this.categories=data.data)
  }

  handleClick(cat:category){
    this._productsService.getProductsByCategories(cat.id).subscribe(data =>{
      this.products = data;
    });
    this.clear();
    document.getElementById(cat.title)?.classList.add('active');
  }
}
