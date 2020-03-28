const sut = require('..').leftScore

describe("Invoke leftScore", function() {   

    it("without arguments", function() {
      const actual = sut()
      expect(actual).toBe(undefined);
    });

    it("without second arguments", function() {
      const actual = sut('test')
      expect(actual).toBe(0);
    });

    it("with exact match", function() {
      const str = 'test1234567'
      const actual = sut(str, str)
      expect(actual).toBe(100);
    });

    it("with exact match, different case", function() {
      const str = 'test1234567'
      const actual = sut(str.toLowerCase(), str.toUpperCase())
      expect(actual).toBe(100);
    });

    it("with difference in first character", function() {
      const str = 'test1234567'
      const actual = sut(`2${str}`, `1${str}`)
      expect(actual).toBe(0);
    });

    it("with difference in last characters", function() {
      const str = 'test'
      const actual = sut(`${str}xabc`, `${str}yabc`)
      expect(actual).toBe(50);
    });

    it("with difference length divide by the maximum length", function() {
      const str = 'test'
      const actual = sut(str, `${str}12345678abcd`)
      expect(actual).toBe(25);
    });

  });