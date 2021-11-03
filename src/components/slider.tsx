import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import { useMotionValue, motion } from 'framer-motion';
import IBaseComponent from 'interfaces/base-component.interface';

const Slider: FC<IBaseComponent> = ({ className = '',  children }) => {
    const ref = useRef(undefined);
    const x = useMotionValue(0);

    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
    const [sliderConstraints, setSliderConstraints] = useState(0);

    useEffect(() => {
        if (!ref?.current) return;

        const calcSliderChildrenWidth = () => {
            setSliderChildrenWidth(
                (ref?.current as unknown as Element).scrollWidth
            );
        };

        calcSliderChildrenWidth();

        const calcSliderWidth = () => {
            setSliderWidth((ref?.current as unknown as Element).clientWidth);
        };

        calcSliderWidth();
        window.addEventListener("resize", calcSliderWidth);

        const calcSliderConstraints = () => {
            setSliderConstraints(sliderChildrenWidth - sliderWidth);
        };

        calcSliderConstraints();
        window.addEventListener("resize", calcSliderConstraints);
    }, [ref, sliderChildrenWidth, sliderWidth]);
    return (
        <motion.div className={`${className} flex`} ref={ref as unknown as Ref<HTMLDivElement> | undefined}
                    drag="x"
                    initial={{ x: 0 }}
                    style={{ x }}
                    dragConstraints={{
                        left: `${-sliderConstraints}`,
                        right: 0
                    }}>
            <>{children}</>
        </motion.div>
    );
};

export default Slider;
