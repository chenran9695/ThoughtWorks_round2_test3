const main = require('../main/main');

describe('taxi fee', function () {
    it('within 2km and no parking' , function() {
        let inputs = {distance:1,parkTime:0};
        let summary = main(inputs);
        let expected = 6;
        expect(summary).toEqual(expected);
    });

    it('within 2km and parking' , function() {
        let inputs = {distance:1,parkTime:4};
        let summary = main(inputs);
        let expected = 7;
        expect(summary).toEqual(expected);
    });

    it('between 2km and 8km and parking' , function() {
        let inputs = {distance:7,parkTime:4};
        let summary = main(inputs);
        let expected = 11;
        expect(summary).toEqual(expected);
    });

    it('more than 8km and parking' , function() {
        let inputs = {distance:9,parkTime:8};
        let summary = main(inputs);
        let expected = 14;
        expect(summary).toEqual(expected);
    });
});
