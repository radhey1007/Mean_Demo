import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm:FormGroup;
  


  constructor(public fb : FormBuilder,public productService:ProductService,private route: ActivatedRoute,private router: Router) {
    this.createForm();
   }

  createForm = () => {
    this.angForm = this.fb.group({
      brandName:['',Validators.required],
      productName:['',Validators.required],
      productId:['',Validators.required]
    });

    this.addCategory();

  } 

  ngOnInit() {
  }

 
  addProduct(brandName, productName, productId) {

    console.table(this.angForm.value);

    this.productService.addProduct(brandName, productName, productId).subscribe((res:any)=> {
      console.log(res);
      if(res.status='success'){
          alert(res.message);
          this.router.navigate(['product/list']);
      }else{
          alert(res._message);
      }

    },err => {
      alert(err.message);
      console.log(err);
      console.log('In error ');
    });
  }

 

}
