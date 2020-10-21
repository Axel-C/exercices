const {countPairs} = require('../service');

test("normal run" , ()=> {
    expect(countPairs([1,2,3,4,5,6] , 1)).toBe(15);
})

test("normal run in reverse" , ()=> {
    expect(countPairs([6,5,4,3,2,1] , 1)).toBe(15);
})

test("handles duplicates" , ()=> {
    expect(countPairs([1,1,2,2,6] , 3)).toBe(2);
})

test("no pair to be found" , ()=> {
    expect(countPairs([1,2,3,4] , 5)).toBe(0);
})

test("empty array is given" , ()=> {
    expect(countPairs([] , 4)).toBe(0);
})

test("only one number in array" , ()=> {
    expect(countPairs([2] , 4)).toBe(0);
})

test("k is not a number" , ()=> {
    expect(() => countPairs([1,2,3,4] , "blip")).toThrow("K is not a number");
})

test("The array does not contains only numbers" , ()=> {
    expect(() => countPairs([1,2,"blirp",4] , 2)).toThrow("The array does not contains only numbers");
})