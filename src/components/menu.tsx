import React from 'react'
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import MenuToggle from 'components/menu-toggle';

const sidebar = {
    open: () => ({
        clipPath: `circle(1500px at 50% 56px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
            duration: 0.5,
        }
    }),
    closed: {
        clipPath: "circle(24px at 50% 56px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
            duration: 0.5,
        }
    }
};

const menuVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const menuItemVariants = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
};

const Menu: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleMenuCLick = (): void => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <motion.div initial={false}
                        animate={isOpen ? "open" : "closed"}>
                <MenuToggle toggle={() => handleMenuCLick()}/>

                <motion.nav
                    variants={sidebar}
                    className="fixed left-0 top-0 bg-secondary w-screen h-screen">
                    <motion.ul variants={menuVariants} className="mx-auto w-fit mt-24 grid gap-2 text-xl font-bold">
                        <motion.li variants={menuItemVariants} className="hover:text-green cursor-pointer">Home</motion.li>
                        <motion.li variants={menuItemVariants} className="hover:text-green cursor-pointer">Cart</motion.li>
                        <motion.li variants={menuItemVariants} className="hover:text-green cursor-pointer">Cart</motion.li>
                        <motion.li variants={menuItemVariants} className="hover:text-green cursor-pointer">Cart</motion.li>
                    </motion.ul>
                </motion.nav>

            </motion.div>
        </>

    );
};

export default Menu;
