const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { OptionModel } = require("./option.model");
const { OptionMessages } = require("./option.messages");
const { generateSlug } = require("../../common/utils/functions");
class OptionService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = OptionModel;
  }
  async create(optionDTO) {
    optionDTO.key = generateSlug(optionDTO.key);
    await this.checkExistOptionByKey(optionDTO.key);
    if (optionDTO?.enums && typeof optionDTO?.enums == "string")
      optionDTO.enums = optionDTO.enums.split(",");
    const newOption = await this.#model.create(optionDTO);
    if (!newOption)
      throw new createHttpError.InternalServerError(
        OptionMessages.CreatedError
      );
    return true;
  }
  async checkExistOptionByKey(key) {
    const option = await this.#model.findOne({ key });
    if (option) throw new createHttpError.Conflict(OptionMessages.Conflict);
    return true;
  }
  async getAll() {
    return await this.#model.find();
  }
}
module.exports = new OptionService();
