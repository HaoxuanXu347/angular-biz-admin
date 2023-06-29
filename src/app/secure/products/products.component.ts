import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  page = 1;
  lastPage: number;
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.load();

  }

  load():void{
    this.productService.all(this.page).subscribe((res)=>{
      this.products = res.data;
      this.lastPage = res.meta.last_page;
    })
  }

  next(): void {
    if (this.page === this.lastPage) {
      return;
    }
    this.page++;
    this.load();
  }

  prev(): void {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.load();
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.productService.delete(id)
        .subscribe(() => this.products = this.products.filter(p => p.id !== id));
    }
  }
}
