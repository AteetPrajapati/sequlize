const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/seed", userController.seed);
router.get("/", userController.findAll);
router.post("/", userController.create);
router.delete("/:id", userController.deleteById);
router.put("/:id", userController.updateById);

module.exports = router;