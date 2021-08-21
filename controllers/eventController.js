const User = require("../models/users");
const Event = require("../models/events");


class Local {

  async createEvent(event) {
    return Event.create(event);
  };

  async findAllEvents() {
    return Event.find();
  };


  async modifyRest(data) {
    return Event.findByIdAndUpdate(
      //Where
      { _id: data.id },
       //Data Changes
      {isActive: data.isActive,},

    );
  };
  // delete event//
  async deleteEvent(id) {
    return Event.findByIdAndRemove({ _id: id });
  };
}

let eventController = new Local();
module.exports = eventController;
