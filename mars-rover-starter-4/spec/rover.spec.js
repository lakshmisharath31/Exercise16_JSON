const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
const Rover = require('../rover.js') ;

\]describe("Rover class", function() {

it("constructor sets position and default values for mode and generatorWatts", function(){
  let check = new Rover(0,Rover.mode,Rover.generatorWatts);
    assert.strictEqual(check.position,0);
    assert.strictEqual(check.mode,'NORMAL');
    assert.strictEqual(check.generatorWatts,110);
});

it("response returned by receiveMessage contains name of message", function(){

const rover = new Rover();
const commands = [new Command('MOVE',100)];
message = new Message("CHECK_IT",commands);
const response = rover.recieveMessage(message);
assert.strictEqual(response.message,"CHECK_IT");
});
 
 it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){

const rover = new Rover();
const commands = [new Command('MOVE',100),new Command('MODE_CHANGE', 'LOW_POWER')]
message = new Message("CHECK_IT",commands);
const response = rover.recieveMessage(message);
assert.strictEqual(response.message,"CHECK_IT");

});

it("responds correctly to status check command", function(){

const rover = new Rover(0);
const commands = [new Command('STATUS_CHECK')]
message = new Message("CHECK_IT",commands);
const response = rover.recieveMessage(message);
console.log(response.results[0]);
assert.deepEqual(response.results[0],{
  "completed": true,
  "roverStatus":{
    "position": 0,
    "mode": 'NORMAL',
    "generatorWatts": 110
    }
});

});
});