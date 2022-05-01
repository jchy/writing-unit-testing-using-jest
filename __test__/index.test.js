const sum = require("../index");
console.log(sum(3+5));

describe("test case inside __test__ for sum function", function (){
    test("sum function is defined", ()=>{
        expect(sum).toBeDefined();
    })
})

describe("toBe tests", ()=>{
    test("toBe boolean value", ()=>{
        expect(10).toBe(10);
        // value
    })
    test("toBe boolean value", ()=>{
        expect(false).toBe(false);
        // Boolean
    })
    test("toBe boolean value", ()=>{
        expect({}).not.toBe({});
        // address cpomparison
    })
    test("toBe boolean value", ()=>{
        let a = {};
        expect(a).toBe(a);
        // same adress
    })
})
describe('toEqual', () => { 
    test("array [] is equal to []", ()=>{
        expect([1,2]).toEqual([1,2]);
    })
    test("array a = [1,2]  not isEqual [1,2,3]",()=>{
        var a= [1,2,3];
        var b=[1,2];
        expect(a).toEqual(expect.arrayContaining(b))
    })
    test("object check 1", ()=>{
        expect({a:1}).toEqual({a:1});
    })
    test("username, email check", ()=>{
        // if
        let obj = {username: "jaswant", email: "recjaswantabc@gmail.com"};
        let out = { username: expect.any(String), email: expect.stringContaining("@gmail.com")}
        expect(obj).toEqual(out);
    })
    test("username contains College", ()=>{
        let username = ["jaswant", "jchy", "princi"]
        expect(username).toContain("jchy");
    })
 })

 describe("realtional checks",()=>{
     test("100+200<=300",()=>{
         var m = 100;
         var n = 200;
         expect(m+n).toBeLessThanOrEqual(300)
     })
     test("100+150<300",()=>{
         var m = 100;
         var n = 150;
         expect(m+n).toBeLessThan(300)
     })
     test("100+200>250",()=>{
         var m = 100;
         var n = 200;
         expect(m+n).toBeGreaterThan(250)
     })
 })
