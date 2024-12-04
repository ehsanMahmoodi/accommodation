/**
 * @swagger
 *  components:
 *   schemas:
 *    createOptionCMP:
 *     type: object
 *     required:
 *       - name
 *       - key
 *     properties:
 *      key:
 *       type: string
 *       description: option-key
 *       example: capacity
 *      name:
 *       type: string
 *       example: ظرفیت
 *      guid:
 *       type: string
 *       example: توضحاتی مختصر درباره ظرفیت
 *      icon:
 *       type: string
 *       description: icon name
 *      enums:
 *       type: array
 *    createOptionDEF:
 *     type: object
 *     properties:
 *      statusCode:
 *       type: number
 *       example: 200
 *      data:
 *       type: object
 *       properties:
 *        message:
 *         type: string
 *         example: آپشن باموفقیت ایجاد شد.
 *    getOptionDEF:
 *     type: object
 *     properties:
 *      statusCode:
 *       type: number
 *       example: 200
 *      data:
 *       type: object
 *       properties:
 *        options:
 *          type: array
 *          items:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *              example: 674ca1d0480ce80830d2f509
 *            title:
 *              type: string
 *              example: امکانات آپارتمان
 *            guid:
 *              type: string
 *              example: توضحاتی مختصر درباره امکانات
 *            key:
 *              type: string
 *              example: apartment-facilities
 *            enums:
 *              type: array
 *              example: []
 *            fieldType:
 *              type: string
 *              example: array
 *            details:
 *              type: array
 *              example: []
 */
/**
 * @swagger
 *  /option/new:
 *   post:
 *    summary: create a new option for Accommodation
 *    tags:
 *      - Accommodation-Option
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: './#/components/schemas/createOptionCMP'
 *      application/json:
 *       schema:
 *        $ref: './#/components/schemas/createOptionCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/createOptionDEF'
 */
/**
 * @swagger
 *  /option:
 *   get:
 *    summary: get all options of Accommodation
 *    tags:
 *      - Accommodation-Option
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/getOptionDEF'
 */
