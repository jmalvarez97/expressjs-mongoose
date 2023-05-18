import { model, Schema } from "mongoose";

const QRSchema = new Schema({
  idSocio: {
    type: String
  },
  img: {
    type: String
  }
});

const QRModel = model("QR", QRSchema);

export { QRModel };
