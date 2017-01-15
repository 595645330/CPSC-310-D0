/**
 * Created by rtholmes on 2016-10-31.
 */

import {expect} from 'chai';

import Math from "../src/Math";
import Log from "../src/Util";

describe("MathSpec", function () {

    var math: Math = null;
    beforeEach(function () {
        math = new Math();
    });

    afterEach(function () {
        math = null;
    });

    // it("Add should return 0 if no valid arrays are found", function () {
    //     return math.add([]).then(function (value: number) {
    //         Log.test('Value: ' + value);
    //         expect(value).to.equal(0);
    //     }).catch(function (err) {
    //         Log.test('Error: ' + err);
    //         expect.fail();
    //     })
    // });

    it("Add should return 6", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/7b77.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(6);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Add should return 12", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(12);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Add should return 18", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4968.json','http://skaha.cs.ubc.ca:11313/7b77.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(18);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Add should return 12", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(12);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Add should return 12", function () {
        return math.add([ 'http://skaha.cs.ubc.ca:11313/4968.json','http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(12);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Add should return error if no numbers are found", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Add should return error if invalid Json(1)", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Add should return error if invalid Json(2)", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/jdw3.json','http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Add should return error if invalid Json(3)", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4968.json','http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Add should return error if no valid arrays are found", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/7b77.json','http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Add should return 0 if no url", function () {
        return math.add([]).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Add should return error if invalid url", function () {
        return math.add(['www.baidu.com']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err).to.equal('Error: URL could not be retrieved');
        })
    });

    it("Add should return error if invalid url", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4968.json','www.baidu.com']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err).to.equal('Error: URL could not be retrieved');
        })
    });

    it("Multiply should return 6", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/7b77.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(6);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Multiply should return 40", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(40);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Multiply should return 240", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/4968.json','http://skaha.cs.ubc.ca:11313/7b77.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(240);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Multiply should return 40", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(40);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Multiply should return error if no numbers are found", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Multiply should return error if no valid arrays are found", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Multiply should return error if no valid arrays are found", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/jdw3.json','http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Multiply should return error if no valid arrays are found", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/4968.json','http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Multiply should return error if empty arrays are found", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/0.json']).then(function (value: number) {
            //console.log(value);
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Multiply should return 0 if no url", function () {
        return math.multiply([]).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err).to.equal('Error: No number was provided');

        })
    });

    it("Multiply should return error if invalid url", function () {
        return math.multiply(['www.baidu.com']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err).to.equal('Error: URL could not be retrieved');
        })
    });

    it("Multiply should return error if invalid url", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/4968.json','www.baidu.com']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err).to.equal('Error: URL could not be retrieved');
        })
    });



});
