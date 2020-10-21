exports.priceCheck = (products, productPrices, productSold, soldPrice) => {
    if (products.length !== productPrices.length || productSold.length !== soldPrice.length) {
        throw 'Input arrays have differents length'
    }

    let errorCounter = 0;
    productSold.forEach((product, index) => {
        const productIndex = products.indexOf(product);
        if (productIndex === -1) {
            throw 'Product sold not found in catalog';
        }
        if (productPrices[productIndex] != soldPrice[index]) {
            errorCounter++;
        }
    })

    return errorCounter;
}

exports.countPairs = (numbers, k) => {
    if (typeof k !== "number") {
        throw "K is not a number";
    }

    const uniqueNumbers = Array.from(new Set(numbers));
    let pairCounter = 0;

    uniqueNumbers.forEach((number, index) => {
        if (typeof number !== "number") {
            throw "The array does not contains only numbers";
        }

        for (let i = index; i < uniqueNumbers.length; i++) {
            if (Math.abs(number - uniqueNumbers[i]) >= k) {
                pairCounter++;
            }
        }
    })
    return pairCounter;
}

