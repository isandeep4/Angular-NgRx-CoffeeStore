import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { AddToCart,GetItems } from '../store/actions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export interface Product {
    id: number,
    uid: string,
    blend_name: string,
    origin: string,
    intensifier: string,
    notes: string,
    variety: String
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private productService:ProductService
  ) {  } 
  
  @Input() product: Product;
  items:Product[];

  ngOnInit() {
    // let id = + this.route.snapshot.params['id'];      
    // this.productService.getProductDetails(id).subscribe(product => {
    //   this.product = product;
    //   console.log("////"+this.product);
    // })
  }

}
