/**
 * @swagger
 *  components:
 *   schemas:
 *    getProfileByNationalIdCMP:
 *     type: object
 *     required:
 *        -  nationalId
 *     properties:
 *      nationalId:
 *       type: string
 *       example: 11111111111
 *    userProfileDEF:
 *     type: object
 *     properties:
 *      statusCode:
 *       type: number
 *       example: 200
 *      data:
 *       type: object
 *       properties:
 *        _id:
 *         type: number
 *         example: 12345
 *        firstName:
 *         type: string
 *         example: Ehsan
 *        lastName:
 *         type: string
 *         example: Mahmood Abadi
 *        email:
 *         type: number
 *         example: user@gmail.com
 *        phone:
 *         type: number
 *         example: 09xxxxxxxxx
 *        nationalId:
 *         type: number
 *         example: 1111111111
 *        isVerified:
 *         type: boolean
 *         example: false
 *        wallet:
 *         type: number
 *         example: 0
 *        role:
 *         type: string
 *         example: USER
 *        createdAt:
 *         type: string
 *         example: 2024-11-30T17:32:47.491Z
 *    getProfileDEF:
 *     type: object
 *     properties:
 *      statusCode:
 *       type: number
 *       example: 200
 *      data:
 *       type: object
 *       properties:
 *        _id:
 *         type: number
 *         example: 12345
 *        firstName:
 *         type: string
 *         example: Ehsan
 *        lastName:
 *         type: string
 *         example: Mahmood Abadi
 *        email:
 *         type: number
 *         example: user@gmail.com
 *        phone:
 *         type: number
 *         example: 09xxxxxxxxx
 *        nationalId:
 *         type: number
 *         example: 1111111111
 *        wallet:
 *         type: number
 *         example: 0
 *        createdAt:
 *         type: string
 *         example: 2024-11-30T17:32:47.491Z
 */
/**
 * @swagger
 *  /user/find-user/{userId}:
 *   get:
 *    summary: get user profile by user ID
 *    tags:
 *      - User
 *    parameters:
 *        - in: path
 *          type: string
 *          name: userId
 *          required: true
 *          description: user id
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userProfileDEF'
 */
/**
 * @swagger
 *  /user/find-user/nationalId:
 *   post:
 *    summary: get user profile by nationalId ID
 *    tags:
 *      - User
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: "./#/components/schemas/getProfileByNationalIdCMP"
 *      application/json:
 *       schema:
 *        $ref: "./#/components/schemas/getProfileByNationalIdCMP"
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userProfileDEF'
 */
/**
 * @swagger
 *  /user/profile/{userId}:
 *   get:
 *    summary: see my profile
 *    tags:
 *      - User
 *    parameters:
 *        - in: path
 *          type: string
 *          name: userId
 *          required: true
 *          description: user id
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/getProfileDEF'
 */