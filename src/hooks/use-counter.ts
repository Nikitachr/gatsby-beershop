import {useState} from "react";

type TUseCounter = [number, () => void, () => void];

export function useCounter(initialAmount = 1): TUseCounter {
    const [amount, setAmount] = useState<number>(initialAmount);

    const increment = (): void => {
        setAmount(prevState => prevState + 1);
    }

    const decrement = (): void => {
        setAmount(prevState => prevState > 1 ? prevState - 1 : prevState);
    }

    return [amount, increment, decrement];
}