import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: string = '';
  name: string = '';

  constructor(
    // private activatedRouteSnapshot: ActivatedRouteSnapshot,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.productId = this.activatedRoute.params['productId'];
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['productId'];
      } 
    })

    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.name = params['name'];
      } 
    })
  }

  save() {
    // llamada al BACKEND

    // exitosa 
    // redirigir al listado
    this.router.navigate(['product/list']);
  }

}
