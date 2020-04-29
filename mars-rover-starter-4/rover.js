const Message = require('./message.js');
class Rover {
  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
   recieveMessage(message){
      const results = [];
      for(const command of message.commands){
        if(command.commandType == "MOVE"){

        }else if(command.commandType == "STATUS_CHECK"){
             results.push({
                        "completed": true,
                        "roverStatus":{
                         "position": this.position,
                        "mode": this.mode,
                        "generatorWatts": this.generatorWatts
                        
                         }
                        });

        }else if(command.commandType == "MODE_CHANGE"){

        }

      }
      return{
       "message":message.name,
       "result":results
      }
    }  
}
     
module.exports = Rover;