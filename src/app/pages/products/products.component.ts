import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { Product } from 'src/app/shared/models/Product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  loadedProduct?: string;

  products: Array<Product> = [];
  
  cl: Boolean= false;
  loadedImage?: string;
  

  constructor(
    private productService: ProductsService,
    private userService: UserService,
    
    ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products =>{
      this.products = products;
      for(let prod of products){
        console.log(prod);
      }
    });
    console.log(this.cl);
  }
  clock(){
      this.cl = true;
      console.log(this.cl);
  }

  afterclick(){
    this.cl = false;
    console.log(this.cl);
  }


  loadImage(img: Product){
    this.productService.loadImages(img.kep).subscribe(data=>{
      this.loadedImage = data;
    });
  }


  
}
