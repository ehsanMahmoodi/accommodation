const { Schema, model } = require("mongoose");

const permissionSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
},{
  versionKey:false
});
const PermissionModel = model("permission", permissionSchema);
module.exports = { PermissionModel };
