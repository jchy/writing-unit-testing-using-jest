const sum = require("./index");
console.log(sum(3+5));

describe("test case for sum function", function () {
    test("sum function is defineed", ()=>{
        expect(sum).toBeDefined();
    })
})