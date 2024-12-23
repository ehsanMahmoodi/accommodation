/**
 * @swagger
 *  components:
 *   schemas:
 *    createPermissionCMP:
 *     type: object
 *     required:
 *        - name
 *     properties:
 *      name: 
 *       type: string
 *      description:
 *       type: string
 */
/**
 * @swagger
 *  /permission/create:
 *   post:
 *    summary: create new permission
 *    tags:
 *      - Permission
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: "./#/components/schemas/createPermissionCMP" 
 *    responses:
 *     200:
 *      description: success.
 */
/**
 * @swagger
 *  /permission/get-all:
 *   get:
 *    summary: get all permissions
 *    tags:
 *      - Permission
 *    responses:
 *     200:
 *      description: success.
 */
/**
 * @swagger
 *  /permission/remove/{id}:
 *   delete:
 *    summary: remove permission by id
 *    tags:
 *      - Permission
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          itype: string
 *          description: permission-id
 *    responses:
 *     200:
 *      description: success.
 */