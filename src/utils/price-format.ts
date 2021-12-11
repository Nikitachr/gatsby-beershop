const priceFormatter = (price: number): string => {
    return `$${price.toFixed(2)}`
}

export default priceFormatter;
