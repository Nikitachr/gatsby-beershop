import {IProduct} from "../interfaces/product.interface";
import {atom, selector} from "recoil";

export interface ICartProduct {
    product: IProduct;
    amount: number;
}

export const cartState = atom<ICartProduct[]>({
    key: 'cartState',
    default: []
});

export const cartProducts = selector({
    key: 'cartProducts',
    get: ({get}) => (get(cartState))
})
