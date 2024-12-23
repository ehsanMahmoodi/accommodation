/**
 * @swagger
 *  components:
 *   schemas:
 *    createReservationCMP:
 *     type: object
 *     required:
 *        -  accommodation_id
 *        -  startDate
 *        -  endDate
 *     properties:
 *      accommodation_id:
 *       type: string
 *       example: accommodation_id
 *      startDate:
 *       type: string
 *       description: تاریخ شروع رزرو
 *       example: 2024,12,05
 *      endDate:
 *       type: string
 *       description: تاریخ پایان رزرو
 *       example: 2024,12,10
 *    createReservationDEF:
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
 *         example: رزور جدید ایجاد شد، بعداز پرداخت ثبت نهایی میشه.
 *    removeReservationDEF:
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
 *         example: رزرو باموفقیت حذف شد.
 */
/**
 * @swagger
 *  /reservation/new:
 *   post:
 *    summary: create a new reservation
 *    tags:
 *      - Reservation
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: './#/components/schemas/createReservationCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/createReservationDEF'
 */
/**
 * @swagger
 *  /reservation:
 *   get:
 *    summary: get all reservation
 *    tags:
 *      - Reservation
 *    responses:
 *     200:
 *      description: success
 */
/**
 * @swagger
 *  /reservation/{id}:
 *   delete:
 *    summary: remove reservation by id
 *    parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *    tags:
 *      - Reservation
 *    responses:
 *     200:
 *      description: success
 */
