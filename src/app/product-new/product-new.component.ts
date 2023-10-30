import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
})
export class ProductNewComponent implements OnInit {
  product: Product = {} as Product;

  // categoryControl: FormControl = new FormControl('',
  //   [
  //     Validators.required
  //   ]
  // );
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    // this.form.controls['name'].invalid
    this.product.name = 'Remera';
    this.product.category = 'Ropa';
    this.form.setValue(this.product);
  }
}
