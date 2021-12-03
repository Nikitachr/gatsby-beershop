import React, {FC, memo, useEffect} from 'react';

import ArrowLeftIco from 'assets/icons/arrow-left.svg';
import ArrowRightIco from 'assets/icons/arrow-right.svg';
import {useCounter} from "../../hooks/use-counter";
import ButtonAnimation from "../animations/button-animation";

type TCounterProps = {
    counterChange: (amount: number) => void;
}

const Counter: FC<TCounterProps> = ({counterChange}) => {
    const [amount, increment, decrement] = useCounter();

    useEffect(() => {
        counterChange(amount);
    }, [amount]);


    return (
        <div className="px-3 py-2 border-black border rounded-full w-24 flex items-center justify-between">
            <ButtonAnimation className="h-17">
                <button onClick={decrement}>
                    <ArrowLeftIco/>
                </button>
            </ButtonAnimation>
            <span className="font-bold">{amount}</span>
            <ButtonAnimation className="h-17">
                <button onClick={increment}>
                    <ArrowRightIco/>
                </button>
            </ButtonAnimation>
        </div>
    );
};

export default memo(Counter);
