import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';
import IBaseComponent from 'interfaces/base-component.interface';

const Slider: FC<IBaseComponent> = ({ className = '', children }) => {

    return (
        <div className={`${className}`}>
            <motion.div className={`flex w-fit`}>
                <>{children}</>
            </motion.div>
        </div>
    );
};

export default Slider;
