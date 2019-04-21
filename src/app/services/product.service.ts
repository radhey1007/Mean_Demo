import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isObject } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/api';

  constructor(public http:HttpClient) { }

  addProduct(brandName, productName, productId) {
   
    const obj = {
      brandName: brandName,
      productName: productName,
      productId: productId
    };  
    var url = this.baseUrl + '/product';
    var headers = new HttpHeaders()
    .set("content-type",'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Credentials', 'true');
    return this.http.post(url , obj, { headers });
        
  }

  getProduct = () => {

    var url = this.baseUrl + '/product';
    var headers = new HttpHeaders()
    .set("content-type",'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get(url,{headers});
  }

  editProduct = (id:any) => {
    var url = this.baseUrl + '/product';
    var headers = new HttpHeaders()
    .set("content-type",'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get(url+'/'+id,{headers});
  }

  updateProduct= (brandName, productName, productId,editId) => {
   
    const obj = {
      brandName: brandName,
      productName: productName,
      productId: productId
    };  
    var url = this.baseUrl + '/product/'+editId;
    var headers = new HttpHeaders()
    .set("content-type",'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Credentials', 'true');
    return this.http.patch(url , obj, { headers });
        
  }

  deleteProduct = (id) => {
    var url = this.baseUrl + '/product/' + id;
    var headers = new HttpHeaders()
    .set("content-type",'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Credentials', 'true');
    return this.http.delete(url,{headers});
  }
}
