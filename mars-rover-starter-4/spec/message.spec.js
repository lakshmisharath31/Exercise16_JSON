const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

  it("throws error if name is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: 'Message name is required'
      }
    );
  });

it("constructor sets name", function(){
  let check = new Message('CHECK_IT');
    assert.strictEqual(check.name, 'CHECK_IT');
});
it("contains a commands array passed into the constructor as 2nd argument", function(){

 // let commands1=new Command('MODE_CHANGE', 'LOW_POWER');
  //let commands2=new Command('MOVE', 12000);
 // let commands = [commands1,commands2];
  let message = new Message('Test message with two commands',[new Command('MODE_CHANGE', 'LOW_POWER'),new Command('MOVE', 12000)]);
  
    assert.deepEqual(message.commands,[new Command('MODE_CHANGE', 'LOW_POWER'),new Command('MOVE', 12000)]);
});

});
