import React, { FC } from 'react';

import IBaseComponent from 'interfaces/base-component.interface';

type TDescriptionProps = { description: string }

const Description: FC<IBaseComponent & TDescriptionProps> = ({ className = '', description = '' }) => {
    return (
        <div className={`${className} `}>
            <h3 className="font-bold text-lg">Description</h3>
            <div className="border-t-2 mt-3 pt-3 border-secondary">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Description;
