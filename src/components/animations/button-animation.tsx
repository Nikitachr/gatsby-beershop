import React, {FC} from 'react';
import { motion } from 'framer-motion';

import IBaseComponent from "../../interfaces/base-component.interface";

const ButtonAnimation: FC<IBaseComponent> = ({ className = '',  children }) => {
    return (
        <motion.div className={`${className} `} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {children}
        </motion.div>
    );
};

export default ButtonAnimation;
