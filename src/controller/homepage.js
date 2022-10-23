import HomepageView from '../view/homepage.js'
import { echoName } from '../model/name_echo.js'

export function renderHomepage(req, res) {

	let echoMessage = echoName(req.query.name)

	let view = new HomepageView()
	view.setText(echoMessage) 
	
	res.render('index', view)
	
}