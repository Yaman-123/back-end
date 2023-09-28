const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

const { createUser, getAllUser } = require("../controller/userController")
const { createcategory, getAllProducts } = require("../controller/categorycontroller")


router.post("/create-category", createcategory)
router.get("/get-products", getAllProducts)
router.post("/create-user", createUser)
router.get("/get-users", getAllUser)

module.exports = router