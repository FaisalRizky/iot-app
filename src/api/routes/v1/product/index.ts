import { ProductController } from "../../../product/controller/ProductController";
import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { MqttPublisher } from "../../../../lib/mqtt/MqttPublisher";

const router = express.Router();

// List
router.get("/", async function (req: Request, res: Response, next: NextFunction) {
	try {
		const data = await (new ProductController).getProducts(req)
		res.send(data).status(200)
	} catch (e) {
		next(e);
	}
});

// Detail
router.get("/:id", async function (req: Request, res: Response, next: NextFunction) {
	try {
		const data = await (new ProductController).getProductDetail(req)
		res.send(data).status(200)
	} catch (e) {
		next(e);
	}
});

// Create
router.post('/', async function(req: Request, res: Response, next: NextFunction) {
	try {
		const getData = await (new ProductController()).createProduct(req.body, req.user).then(result => {
			return result
		})
		res.send(getData).status(200)
	} catch (e) {
		next(e)
	}
})

// Delete
router.delete("/:id", async function (req: Request, res: Response, next: NextFunction) {
	try {
		const getData = await (new ProductController()).deleteProduct(req).then(result => {
			return result
		})
		res.send(getData).status(200)
	} catch (e) {
		next(e);
	}
})

// Update
router.put("/:id", async function (req: Request, res: Response, next: NextFunction) {
	try {
		await (new ProductController()).updateProduct(req.params.id, req);
		res.send({
				"status": "true",
				"message" : "Success Sends data to MQTT"
			}
		).status(200)
	} catch (e) {
		next(e);
	}
})

export default router;