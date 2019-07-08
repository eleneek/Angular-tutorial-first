import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
      name: ['',[Validators.minLength(2)] ],
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  onSubmit(customeerdata) {
    console.warn('Your order has been submitted', customeerdata);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  setDefault() {
    this.checkoutForm.patchValue({
      name: 'John Doe'
    });
  }

  ngOnInit() {
  }

  remove(id) {
    this.items = this.cartService.remove(id);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}
