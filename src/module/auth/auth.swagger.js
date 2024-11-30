/**
 * @swagger
 *  components:
 *   schemas:
 *    sendOtpCMP:
 *     type: object
 *     required:
 *        -  phone
 *        -  nationalId
 *     properties:
 *      nationalId:
 *       type: string
 *       example: 11111111111
 *      phone:
 *       type: string
 *       example: 09xxxxxxxxx
 *    checkOtpCMP:
 *     type: object
 *     required:
 *        -  phone
 *        -  code
 *     properties:
 *      phone:
 *       type: string
 *       example: 09xxxxxxxxx
 *      code:
 *       type: number
 *       example: 12345
 *    sendOtpDEF:
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
 *         example: رمز یکبارمصرف ارسال شد.
 *        otp:
 *         type: object
 *         properties:
 *          code:
 *           type: number
 *           example: 12345
 *          expiresIn:
 *           type: number
 *           example: 1732982773966
 *    checkOtpDEF:
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
 *         example: با موفقیت وارد شدید.
 */
/**
 * @swagger
 *  /auth/send-otp:
 *   post:
 *    summary: send otp to user phone
 *    tags:
 *      - Auth
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: './#/components/schemas/sendOtpCMP'
 *      application/json:
 *       schema:
 *        $ref: './#/components/schemas/sendOtpCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/sendOtpDEF'
 */
/**
 * @swagger
 *  /auth/check-otp:
 *   post:
 *    summary: verify user phone number and login
 *    tags:
 *      - Auth
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: './#/components/schemas/checkOtpCMP'
 *      application/json:
 *       schema:
 *        $ref: './#/components/schemas/checkOtpCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/checkOtpDEF'
 */
