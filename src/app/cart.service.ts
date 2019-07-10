import {Injectable} from '@angular/core';


@Injectable ({
    providedIn: 'root'
})
export class CartService {
    items =[];
    constructor() {}
    addToCart(product) {
        this.items.push(product);
    }

    getitems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    remove(id) {
        this.items.splice(id, 1);
        return this.items;
    }
    check(product) {
        return this.items.includes(product);
    }
}
