import React, { FC } from 'react';
import { motion } from 'framer-motion';

const Path: FC = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle: FC<{ toggle: () => void }> = ({ toggle }) => {
    return (
        <button onClick={toggle}
                className="fixed z-10 left-half top-8 rounded-full bg-secondary w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <Path
                    variants={{
                        closed: { d: 'M 2 5.5 L 22 5.5' },
                        open: { d: 'M 3 18.0 L 22 2.0' }
                    }}
                />
                <Path
                    variants={{
                        closed: { d: 'M 2 16.5 L 22 16.5' },
                        open: { d: 'M 3 2.0 L 22 18.0' }
                    }}
                />
            </svg>
        </button>
    );
};

export default MenuToggle;
