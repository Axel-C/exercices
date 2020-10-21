const {priceCheck} = require('../service');

test("finding the errors", () => {
    const products = ["eggs", "milk", "cheese"];
    const productPrices = [2.89, 3.29, 5.79];
    const productSold = ["eggs", "eggs", "cheese", "milk"];
    const soldPrice = [2.89, 2.99, 5.97, 3.29];

    expect(priceCheck(products , productPrices , productSold , soldPrice)).toBe(2);
}) 

test("no error to be found", () => {
    const products = ["eggs", "milk", "cheese"];
    const productPrices = [2.89, 3.29, 5.79];
    const productSold = ["eggs", "eggs", "cheese", "milk"];
    const soldPrice = [2.89, 2.89, 5.79, 3.29];

    expect(priceCheck(products , productPrices , productSold , soldPrice)).toBe(0);
}) 

test("empty list of product sold", () => {
    const products = ["eggs", "milk", "cheese"];
    const productPrices = [2.89, 3.29, 5.79];
    const productSold = [];
    const soldPrice = [];

    expect(priceCheck(products , productPrices , productSold , soldPrice)).toBe(0);
}) 

test("arrays of differents sizes", () => {
    const products = ["eggs", "milk", "cheese"];
    const productPrices = [2.89, 3.29, 5.79];
    const productSold = ["eggs"];
    const soldPrice = [];

    expect(() => priceCheck(products , productPrices , productSold , soldPrice)).toThrow('Input arrays have differents length');
}) 

test("product cannot be found", () => {
    const products = ["eggs", "milk", "cheese"];
    const productPrices = [2.89, 3.29, 5.79];
    const productSold = ["peanut"];
    const soldPrice = [2.88];

    expect(() => priceCheck(products , productPrices , productSold , soldPrice)).toThrow('Product sold not found in catalog');
}) 

