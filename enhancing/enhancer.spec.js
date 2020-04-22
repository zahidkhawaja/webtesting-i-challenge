const { succeed, fail, repair } = require('./enhancer.js');

describe("Enhancing system test suite", () => {

    describe("succeed()", () => {
        it("Add 1 to enhancement", () => {

            const item = {
                enhancement: 15
            }

            const actual = succeed(item);

            expect(actual.enhancement).toBe(16);

        })
        it("Does not add 1 if enhancement is 20", () => {

            const item = {
                enhancement: 20
            }

            const actual = succeed(item);

            expect(actual.enhancement).toBe(20);
        })
    })

    describe("fail()", () => {
        it("Subtract 5 from durability if enhancement is below 15", () => {
            
            const item = {
                enhancement: 14,
                durability: 75
            }

            const actual = fail(item);

            expect(actual.durability).toBe(70);

        })
    })
})