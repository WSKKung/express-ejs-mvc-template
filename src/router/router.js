import { Router } from "express"
import { renderHomepage } from "../controller/homepage.js"
import multer from "multer"

const upload = multer()
const router = Router()

router.get('/', renderHomepage)

router.post('/test', upload.none(), (req, res) => {
	res.send("Wow :^O")
})

export default router