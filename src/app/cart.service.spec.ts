import { CartService } from './cart.service';

describe('Cart Service tests', () => {
  let cartService: CartService;
  const product = {
    name: 'Phone Standard',
    price: 299,
    description: ''
  };
  beforeEach(() => {
    cartService = new CartService();
  });

  it('item lists default length should be 0', () => {
    expect(cartService.items).toEqual([]);
    expect(cartService.items.length).toBe(0);
  });

  it('Method addtoCart should add items to the array', () => {
    cartService.addToCart('product');
    expect(cartService.items.includes('product')).toBe(true);
  });

  it('Method getItems should get items from items array', () => {
    expect(cartService.getitems()).toBe(cartService.items);
  });

  it('Method clearCart should clear all items from cart array', () => {
    expect(cartService.items.length).toBe(0);
    expect(cartService.clearCart()).toBe(cartService.items);
  });

  it('Method clearItem should clear specific item from cart array', () => {
    cartService.addToCart(product);
    cartService.remove(product);
    expect(cartService.getitems()).toEqual(cartService.items);
  });
  it('Method clearItem should clear specific item from cart array', () => {
    cartService.addToCart(product);
    expect(cartService.check(product)).toBe(true);
  });
});
