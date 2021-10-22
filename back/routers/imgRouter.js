const express = require("express");
const { ImgBox } = require("../models");
const router = express.Router();

router.get("/list", async (req, res, next) => {
  try {
    const imgs = await ImgBox.findAll();

    return res.status(200).json(imgs);
  } catch (error) {
    console.error(error);
    return res.status(400).send("데이터를 불러올 수 없습니다.");
  }
});

router.post("/create", async (req, res, next) => {
  const { title, filename, fileURL } = req.body;

  try {
    await ImgBox.create({ title, filename, fileURL });
    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(400).send("이미지를 추가할 수 없습니다.");
  }
});

module.exports = router;
