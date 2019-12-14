import UserController from "../../controller/UserController";
const express = require('express');
const router = express.Router();

let userController = new UserController();

// router.get("/", userController.getAll);
router.post("/login", userController.postLogin);
router.post("/signup", userController.postSignup)
module.exports = router;