import MonHocController from "../../controller/MonHocController";
const express = require('express');
const router = express.Router();

let monhocController = new MonHocController();

router.get("/", monhocController.getAll);
router.post("/test", monhocController.postTest);

module.exports = router;