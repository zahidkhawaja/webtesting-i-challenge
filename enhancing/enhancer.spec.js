const { succeed, fail, repair } = require('./enhancer.js');

describe("Enhancing system", () => {
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
})