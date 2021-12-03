import {cartState, ICartProduct} from "../store/state";
import {useRecoilState} from "recoil";
import {useCallback} from "react";

type TCartState = [
    ICartProduct[],
    (id: string) => void,
    (id: string) => void,
    (id: string) => void
]


export default function useCartState(): TCartState {
    const [products, setProducts] = useRecoilState(cartState);

    const incrementProductQuantity = useCallback((id: string) => {
            setProducts(prevState => {
                const newState = [...prevState];
                const index = newState.findIndex(el => el.product.id === id);
                newState[index] = {...newState[index], amount: newState[index].amount + 1}
                return newState;
            })
        },
        [],
    );

    const decrementProductQuantity = useCallback((id: string) => {
            setProducts(prevState => {
                const newState = [...prevState];
                const index = newState.findIndex(el => el.product.id === id);
                newState[index] = {...newState[index], amount: newState[index].amount - 1}
                return newState;
            })
        },
        [],
    );

    const removeFromCart = useCallback((id: string) => {
        setProducts(prevState => prevState.filter(el => el.product.id !== id))
    }, [])

    return [products, incrementProductQuantity, decrementProductQuantity, removeFromCart];

}