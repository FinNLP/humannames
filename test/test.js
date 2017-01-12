const names = require("../index.json");
const assert = require("assert");
describe('Human names', function () {
	it('Length', function () {
		assert.equal(names.length>197000,true);
		this.test.title = `Length: ${names.length}`;
	});
	it('indexOf', function () {
		assert.equal(!!~names.indexOf("Alex"),true);
		assert.equal(!!~names.indexOf("Corvi"),true);
	});
});