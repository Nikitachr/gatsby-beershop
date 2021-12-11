import { ICartProduct } from 'store/state';

const calculateTotalPrice = (products: ICartProduct[]): number => {
    let total = 0;
    products.forEach(el => total += el.product.price * el.amount);
    return total;
}

export default calculateTotalPrice;
