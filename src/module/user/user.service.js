const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { UserModel } = require("./user.model");
const { UserMessages } = require("./user.messages");
const { isValidObjectId } = require("mongoose");
class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async getUserById(userId) {
    return await this.findUser(userId);
  }
  async getUserByNationalId(nationalId) {
    return await this.findUser(nationalId, "nationalId");
  }
  async findUser(value, field = "_id") {
    const query = { [field]: value };
    if(field ==='_id' && !isValidObjectId(value)){
       throw new createHttpError.BadRequest(UserMessages.Invalid_ObjectID)
    }
    const user = await this.#model.findOne(query, {
      otp: 0,
      __v: 0,
      updatedAt: 0,
    });
    if (!user) throw new createHttpError.NotFound(UserMessages.NotFound);
    return user;
  }
  async getProfile(userId) {
    const user = await this.#model.findById(userId, {
      otp: 0,
      __v: 0,
      updatedAt: 0,
      role: 0,
      isVerified: 0,
    });
    if(!user)
      throw new createHttpError.NotFound(UserMessages.NotFound)
    return user
  }
}
module.exports = new UserService();
