const names = require("../index.json");
const assert = require("assert");
describe('Human names', function () {
	it('Length', function () {
		assert.equal(Object.keys(names).length>197000,true);
		this.test.title = `Length: ${Object.keys(names).length}`;
	});
	it('look up', function () {
		assert.equal(names["Alex"],true);
		assert.equal(names["Corvi"],true);
	});
});