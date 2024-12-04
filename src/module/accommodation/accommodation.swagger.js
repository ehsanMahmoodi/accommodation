/**
 * @swagger
 *  components:
 *   schemas:
 *    createAccommodationCMP:
 *     type: object
 *     required:
 *        -  title
 *     properties:
 *      title:
 *       type: string
 *       example: عنوان اقامتگاه
 *      description:
 *       type: string
 *       example: توضیحاتی درباره اقامتگاه
 *      price:
 *       type: number
 *       example: 1000
 *      images:
 *       type: array
 *       items:
 *        type: file
 *        format: binary
 *      address:
 *       type: object
 *       properties:
 *         province:
 *           type: string
 *           example: فارس
 *           description: نام استان
 *         city:
 *           type: string
 *           example: شیراز
 *           description: نام شهر
 *         street:
 *           type: string
 *           example: ارم
 *           description: نام خیابان
 *         postalCode:
 *           type: string
 *           example: "711111111"
 *           description: کد پستی
 *         coordinates:
 *           type: array
 *           items:
 *             type: number
 *           example: [29.633708, 52.530075]
 *           description: مختصات جغرافیایی
 *      options:
 *       type: array
 *       description: جزئیات آپشن
 *       items:
 *        type: object
 *        properties:
 *         optionKey:
 *          type: string
 *          description: عنوان جزئیات 
 *          example: optionValue
 *    createAccommodationDEF:
 *     type: object
 *     properties:
 *      statusCode:
 *       type: number
 *       example: 201
 *      data:
 *       type: object
 *       properties:
 *        message:
 *         type: string
 *         example: اقامتگاه جدید باموفقیت ایجاد شد.
 *    removeAccommodationDEF:
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
 *         example: اقامتگاه باموفقیت حذف شد.
 */
/**
 * @swagger
 *  /accommodation/new:
 *   post:
 *    summary: create a new accommodation
 *    tags:
 *      - Accommodation
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *       schema:
 *        $ref: './#/components/schemas/createAccommodationCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/createAccommodationDEF'
 */
/**
 * @swagger
 *  /accommodation/remove/{id}:
 *   delete:
 *    summary: delete accommodation by id
 *    tags:
 *      - Accommodation
 *    parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: accommodationID
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/removeAccommodationDEF'
 */
/**
 * @swagger
 *  /accommodation/:
 *   get:
 *    summary: get all accommodation
 *    tags:
 *      - Accommodation
 *    responses:
 *     200:
 *      description: success
 */

