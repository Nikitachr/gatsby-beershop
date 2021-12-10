import { cartState } from 'store/state';
import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { IProduct } from 'interfaces/product.interface';

export default function useAddToCart(): (product: IProduct, amount: number) => void {
    const [_, setProducts] = useRecoilState(cartState);

    const addToCart = useCallback((product, amount = 1) => {
        setProducts(prevState => {
            const index = prevState.map(el => el.product).findIndex(el => el.id === product.id);
            if (index === -1) {
                return [...prevState, { product, amount }]
            }
            const newState = [...prevState];
            newState[index] = {
                ...newState[index],
                amount: newState[index].amount + amount
            }
            return newState;
        })
    }, []);

    return addToCart;
}
