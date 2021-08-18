const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema({
  name: {
    type: Schema.Types.String,
    ref: "nameEvent",
    required: true,
    lowercase:true,
  },
  addres:{
    type: String,
    required: true,
    lowercase:true,
  },
  typeEvent:{
    type:String,
    required:true,
    lowercase:true,
  },
  isActive: {
    type: Boolean,
    default: true,
    lowercase:true,
  },
  imgEvent:{
    type:Schema.Types.Array,
    ref:"img",
    lowercase:true,
  },
  capacity:{
    type:String,
    lowercase:true,
  },

});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
