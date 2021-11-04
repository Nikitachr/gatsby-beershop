import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import { useMotionValue, motion } from 'framer-motion';
import IBaseComponent from 'interfaces/base-component.interface';
import useWindowDimensions from 'hooks/use-window-demension';

const Slider: FC<IBaseComponent> = ({ className = '', children }) => {
    const { height, width } = useWindowDimensions();
    const [constraints, setConstraints] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);





    return (
        <div className={`${className}`} ref={ref as unknown as Ref<HTMLDivElement> | undefined}>
            <motion.div className={`flex`}
                        drag="x"
                        initial={{ x: 0 }}
                        style={{ x }}
                        dragConstraints={{ left: -300, right: 0 }}>
                <>{children}</>
            </motion.div>
        </div>
    );
};

export default Slider;
