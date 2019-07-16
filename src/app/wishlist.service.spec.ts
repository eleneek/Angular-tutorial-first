import {WishListService} from './wishlist.service';

describe('Testing Wishlist Service', () => {
  let wishService: WishListService;

  beforeEach(() => {
    wishService = new WishListService;
  });

  it('At first wishlist should be empty', () => {
    expect(wishService.wishList.length).toBe(0);
  });

  it('Method getAll should return all wishlist items', () => {
    expect(wishService.getAll()).toBe(wishService.wishList);
  });

  it('Method add should add item to wishlist', () => {
    wishService.add({ product: 'abc' }, 1);
    expect(wishService.wishList[0].product).toBe(true);
    expect(wishService.wishList[0].id).toBe(1);
  });

  it('Method ckeck should checkif item is in wishlist', () => {
    wishService.add({ product: 'abc' }, 1);
    expect(wishService.check(1)).toBe(true);
  });

  it('Method remove should remove item to wishlist with id', () => {
    wishService.add({ product: 'abc' }, 1);
    wishService.remove(1);
    expect(wishService.check(1)).toBe(false);
  });

});
