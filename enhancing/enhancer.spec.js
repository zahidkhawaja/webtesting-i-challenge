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

        it("Subtract 10 from durability if enhancement is below 17 and above 15", () => {

            const item = {
                enhancement: 16,
                durability: 75
            }

            const actual = fail(item);

            expect(actual.durability).toBe(65);
        })

        it("Substract 1 from durability if enhancement is above 16", () => {

            const item = {
                enhancement: 18,
                durability: 50
            }

            const actual = fail(item);

            expect(actual.durability).toBe(49);
        })
    })

    describe("repair()", () => {
        it("Set durability to 100", () => {

            const item = {
                name: "Test",
                durability: 55,
                enhancement: 15
            }

            const actual = repair(item);

            expect(actual.durability).toBe(100);
        })
    })
})