const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });
it("constructor sets command type", function(){
  let check = new Command('CHECK_IT');
    assert.strictEqual(check.commandType, 'CHECK_IT');
});
it("constructor sets a value passed in as the 2nd argument", function(){
  let check = new Command('CHECK_IT',123);
    assert.strictEqual(check.value, 123);
});

});