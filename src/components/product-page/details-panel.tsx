import React, {FC} from 'react';
import {IProduct} from "../../interfaces/product.interface";
import IBaseComponent from "../../interfaces/base-component.interface";

type TDetailsPanelProps = Pick<IProduct, 'ibu' | 'alcohol' | 'brewery' | 'size' | 'style' | 'packing'>

const DetailsPanel: FC<IBaseComponent & TDetailsPanelProps> = ({
                                                                   className = '',
                                                                   size,
                                                                   style,
                                                                   packing,
                                                                   brewery,
                                                                   alcohol,
                                                                   ibu
                                                               }) => {
    return (
        <div className={`${className} bg-secondary px-16 py-12`}>
            <h1 className="mx-auto block w-min font-bold text-2xl">DETAILS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-4 mt-6">
                <div className="grid gap-y-2">
                    <p className="font-bold">SIZE</p>
                    <p>{`${size}ml`}</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="font-bold">ALC</p>
                    <p>{`${alcohol}%`}</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="font-bold">BREWERY</p>
                    <p>{brewery}</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="font-bold">STYLE</p>
                    <p>{style}</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="font-bold">PACKING</p>
                    <p>{packing}</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="font-bold">IBU</p>
                    <p>{ibu}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPanel;
