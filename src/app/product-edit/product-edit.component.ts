import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm:FormGroup;  
  products:any = [];

  constructor(public fb : FormBuilder,public productService:ProductService,private route: ActivatedRoute,private router: Router) 
  { 
    this.createForm();
  }

  createForm = () => {
    this.angForm = this.fb.group({
      brandName:['',Validators.required],
      productName:['',Validators.required],
      productId:['',Validators.required]
    });
  }

  ngOnInit() {

      this.route.params.subscribe( params => { 
        this.productService.editProduct(params['id']).subscribe((res:any)=>{
          console.table(res);
          this.products = res.data;
        }, err => {
           console.log(err,'Err'); 
        });      
      }, err=> {
         console.log(err);
         this.router.navigate(['product/list']);
      });
  }

  editProduct = (brandName,productName,productId,editId) => {


   
    this.productService.updateProduct(brandName, productName, productId,editId).subscribe((res:any)=> {
      console.log(res);
      if(res.status='success'){
          alert(res.message);
          this.router.navigate(['product/list']);
      } else {
          alert(res._message);
      }

    },err => {
      alert(err.message);
      console.log(err);
      console.log('In error ');
    });
  }

}
