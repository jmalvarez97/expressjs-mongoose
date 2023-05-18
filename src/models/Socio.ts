import { model, Schema } from "mongoose";

const SocioSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  img: {
    type: String
  },
  bills: {
    type: [],
    default: []
  },
  initDate: {
    type: Date,
    default: Date.now
  }
});

const SocioModel = model("Socio", SocioSchema);

export { SocioModel };
