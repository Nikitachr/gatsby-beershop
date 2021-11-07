import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import IBaseComponent from 'interfaces/base-component.interface';

const Slider: FC<IBaseComponent> = ({ className = '', children }) => {
    // const { height, width } = useWindowDimensions();
    const [constraints, setConstraints] = useState<number>(-300)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleResize();

        function handleResize(): void {
            if (!ref?.current) {
                return;
            }
            const { innerWidth: width } = window;
            const newConstraints = width - ref.current.offsetWidth;
            console.log(width, ref.current.offsetWidth)
            setTimeout(() => {
                setConstraints(newConstraints);
            }, 1000)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    return (
        <div className={`${className}`}>
            <motion.div ref={ref as unknown as Ref<HTMLDivElement> | undefined} className={`flex w-fit`}
                        drag="x"
                        dragConstraints={{ left: constraints, right: 0 }}>
                <>{children}</>
            </motion.div>
        </div>
    );
};

export default Slider;
