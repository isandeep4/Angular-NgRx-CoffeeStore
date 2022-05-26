import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product/product.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  id: number;
  constructor(private route: ActivatedRoute, private store: Store<{ items: Product[]; cart: [] }>) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.store.select('shop')
      .subscribe((data) => {
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          if (data.items[i].id === +this.id) {
            this.product = data.items[i];
            break;
          }
        }
      });
  }

}
