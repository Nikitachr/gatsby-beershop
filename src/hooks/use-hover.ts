import { Ref, useEffect, useRef, useState } from 'react';

function useHover() {
    const [value, setValue] = useState<boolean>(false);
    const ref = useRef<Ref<HTMLElement> | undefined>(undefined);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
        () => {
            const node = ref.current as unknown as Element;
            if (node) {
                node.addEventListener("mouseenter", handleMouseOver);
                node.addEventListener("mouseleave", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseenter", handleMouseOver);
                    node.removeEventListener("mouseleave", handleMouseOut);
                };
            }
        },
        [ref.current]
    );
    return [ref as Ref<HTMLDivElement>, value];
}

export default useHover;
