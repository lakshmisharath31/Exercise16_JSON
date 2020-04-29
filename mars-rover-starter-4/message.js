class Message {
  constructor(name, commands) {
    this.name= name;
    if (!name) {
      throw Error("Message name is required");
    }
    this.commands = commands;
  }

}

module.exports = Message;