import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any=[];
  products:any=[];
  constructor(public productservice:ProductService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList = () => {
    this.productservice.getProduct().subscribe((res:any) => {
      this.products = res;
      console.table(res)
  },err=> {
    console.log('err in fetching data...' + err);
  });
  }

  delete = (id) => {
    this.productservice.deleteProduct(id).subscribe((res:any)=>{
       if(res){
        alert('Record Deleted successfully');
        this.refreshList();
        }
    },err=> {
      console.log('err===>',err);
    })
  }

}
