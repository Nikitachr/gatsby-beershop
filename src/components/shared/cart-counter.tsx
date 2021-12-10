import React, {FC, memo} from 'react';

import IBaseComponent from "../../interfaces/base-component.interface";
import ArrowTopIco from 'assets/icons/arrow-top.svg';
import ArrowDownIco from 'assets/icons/arrow-down.svg';
import RemoveIco from 'assets/icons/remove.svg';
import ButtonAnimation from "../animations/button-animation";

type TCartCounterProps = {
    amount: number;
    increment: () => void;
    decrement: () => void;
    remove: () => void;
};

const CartCounter: FC<IBaseComponent & TCartCounterProps> = ({className = '', amount, increment, decrement, remove}) => {
    return (
        <div className={`${className} flex items-center gap-3`}>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-black">
                {amount}
            </div>
            <div className="flex items-center flex-col justify-center gap-4">
                <ButtonAnimation className="h-14 flex">
                    <button aria-label="increment amount" onClick={increment}>
                        <ArrowTopIco/>
                    </button>
                </ButtonAnimation>
                {amount === 1 ?
                    <ButtonAnimation className="h-14 flex">
                        <button aria-label="remove product" onClick={remove}>
                            <RemoveIco/>
                        </button>
                    </ButtonAnimation>
                     :
                    <ButtonAnimation className="h-14 flex">
                        <button aria-label="decrement amount" onClick={decrement}>
                            <ArrowDownIco/>
                        </button>
                    </ButtonAnimation>
                }
            </div>
        </div>
    );
};

export default memo(CartCounter);
