import express from "express"
const router = express.Router()

router.all("*", (req, res) => {
  res.status(200).json({
    "msg": "API",
  })
})

export default router
