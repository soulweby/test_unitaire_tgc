let year = "2000";
describe("get year date", () => {

    year= parseInt(year);
    it('should  a number', function () {
        expect(year).toBe(2000)
    });
})