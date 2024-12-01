/**
 * @swagger
 *  components:
 *   schemas:
 *    accommodationCMP:
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
 *    accommodationDEF:
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
 *        $ref: './#/components/schemas/accommodationCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/accommodationDEF'
 */

