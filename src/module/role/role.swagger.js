/**
 * @swagger
 *  components:
 *   schemas:
 *    createRoleCMP:
 *     type: object
 *     required:
 *        - name
 *        - permissions
 *     properties:
 *      name: 
 *       type: string
 *      permissions:
 *       type: array
 *       description: permission-id
 *       items:
 *        type: string
 */
/**
 * @swagger
 *  /role/create:
 *   post:
 *    summary: create new role
 *    tags:
 *      - Role
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: "./#/components/schemas/createRoleCMP" 
 *    responses:
 *     200:
 *      description: success.
 */
/**
 * @swagger
 *  /role/get-all:
 *   get:
 *    summary: get all role
 *    tags:
 *      - Role
 *    responses:
 *     200:
 *      description: success.
 */
/**
 * @swagger
 *  /role/remove/{name}:
 *   delete:
 *    summary: remove role by name
 *    tags:
 *      - Role
 *    parameters:
 *        - in: path
 *          name: name
 *          required: true
 *          itype: string
 *          description: permission-name
 *    responses:
 *     200:
 *      description: success.
 */