const { Schema, model, Types } = require("mongoose");

const roleSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    permissions: { type: [Types.ObjectId], default: [], ref: "permissions" },
  },
  {
    versionKey: false,
  }
);
const RoleModel = model("Role", roleSchema);
module.exports = { RoleModel };
