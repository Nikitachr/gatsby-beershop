import React, {FC, memo, SyntheticEvent} from 'react';
import IBaseComponent from 'interfaces/base-component.interface';
import { motion } from 'framer-motion'

type TAddButtonProps = {
    onClick: () => void;
}

const AddButton: FC<IBaseComponent & TAddButtonProps> = ({ className = '', onClick }) => {

    const addButtonHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    }

    return (
        <motion.button aria-label="add to cart" className={`${className} w-12 h-12 z-50 rounded-full bg-blue text-white text-xl text-white hover:bg-blue-light`}
                       onClick={addButtonHandler}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       initial={{ scale: 0, y: 20 }}
                       animate={{ scale: 1, y: 0 }}
                       exit={{ scale: 0, y: 20 }}>+</motion.button>
    );
};

export default memo(AddButton);
