const sut = require('..').similarity

describe("Calculate similarity", function () {

    it("without arguments", function () {
        const actual = sut()
        expect(actual).toBe(undefined);
    });

    it("without second arguments", function () {
        const actual = sut('test')
        expect(actual).toBe(0);
    });

    it("with exact match", function () {
        const str = 'test1234567'
        const actual = sut(str, str)
        expect(actual).toBe(100);
    });

    it("with exact match, different case", function () {
        const str = 'test1234567'
        const actual = sut(str.toLowerCase(), str.toUpperCase())
        expect(actual).toBe(100);
    });

    it("with difference in first character", function () {
        const str = 'abc'
        const actual = sut(`2${str}`, `12${str}`)
        expect(actual).toBe(80);
    });

});