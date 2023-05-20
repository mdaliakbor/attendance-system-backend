const router = require("express").Router();
const userController = require("../controller/user");
/**
 * Get user by id or email
 * @route /api/v1/users/:userId
 * @method GET
 * @visibility Privet
 */
router.get("/:userId", userController.getUserById);
/**
 * update user by id
 * @route /api/v1/users/:userId
 * @method PUT
 * @visibility Privet
 */
router.put("/:userId", userController.putUserById);
/**
 * update user by id
 * @route /api/v1/users/:userId
 * @method PATCH
 * @visibility Privet
 */
router.patch("/:userId", userController.patchUserById);
/**
 * delete user by id
 * @route /api/v1/users/:userId
 * @method DELETE
 */
router.delete("/:userId", userController.deleteUserById);
/**
 * get all users include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @route /api/v1/users?sort=["by","name"]
 * @method GET
 * @visibility Privet
 */
router.get("/", userController.getUsers);
/**
 * create a new user
 * @route /api/v1/users
 * @method POST
 * @visibility Privet
 */
router.post("/", userController.postUser);

module.exports = router;
