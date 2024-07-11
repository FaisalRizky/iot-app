import { AuthController } from "../../../auth/Controller/AuthController";
import * as express from "express";
import { Request, Response, NextFunction } from "express";

const router = express.Router();


// Register
router.post('/register', async function(req: Request, res: Response, next: NextFunction) {
	try {
		const getData = await (new AuthController()).register(req.body).then(result => {
			return result
		})
		res.send(getData).status(200)
	} catch (e) {
		next(e)
	}
})

// Login
router.post('/login', async function(req: Request, res: Response, next: NextFunction) {
	try {
		const getData = await (new AuthController()).login(req.body).then(result => {
			return result
		})
		res.send(getData).status(200)
	} catch (e) {
		next(e)
	}
})


export default router;