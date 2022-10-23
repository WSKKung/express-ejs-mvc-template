import express from 'express'
import router from './router/router.js'
import path from 'path'
import { fileURLToPath } from 'url'
import reload from 'reload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 4000

app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})

reload(app)