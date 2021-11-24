import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IProduct {
    alcohol: number;
    description: {
        description: string;
    };
    id: string;
    image: {
        gatsbyImageData: IGatsbyImageData;
    };
    price: number;
    size: number;
    title: string;
    brewery: string;
    style: string;
    packing: string;
    ibu: string;
}
