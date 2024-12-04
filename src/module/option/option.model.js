const { Schema, model } = require("mongoose");
const optionSchema = new Schema(
  {
    key: { type: String, default: "", required: true },
    name: { type: String, default: "", required: true },
    guid: { type: String, default: "" },
    icon: { type: String, default: "" },
    enums: { type: Array, default: [] },
  },
  {
    versionKey: false,
  }
);
const OptionModel = model("option", optionSchema);
module.exports = { OptionModel };
