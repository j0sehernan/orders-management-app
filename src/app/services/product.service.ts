import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //url = "https://cors-anywhere.herokuapp.com/https://app-orders-management.herokuapp.com/api/jh/products"
  url = "/api/jh/products"

  constructor(private http: HttpClient) {
    console.log("Hello product");
  }

  listProducts() {
    let headers = new HttpHeaders().set("Content-Type", "application/json")

    return this.http.get(this.url, {
      headers: headers
    })
  }
}
