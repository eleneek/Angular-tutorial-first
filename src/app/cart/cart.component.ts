import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getitems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customeerdata) {
    console.warn('Your order has been submitted', customeerdata);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  setDefault() {
    this.checkoutForm.get('name').setValue('Jon Doe');
    this.checkoutForm.get('address').setValue('Tbilisi');
  }

  ngOnInit() {
  }
}
