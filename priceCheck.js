const prompt = require('prompt-sync')();
const {priceCheck} = require('./service');

const products = prompt('Enter the product names separated by "," :').replace(/\s/g, '').split( ',');
const productPrices = prompt('Enter the product prices separated by "," :').split( ',').map(x => parseFloat(x ,10));
const productSold = prompt('Enter the products sold names separated by "," :').replace(/\s/g, '').split( ',');
const soldPrice = prompt('Enter the products sold price separated by "," :').split( ',').map(x => parseFloat(x ,10));

console.log(priceCheck(products , productPrices , productSold , soldPrice));
