
// import { VoucherAppPromoDetailTransformer } from "../transformer/VoucherAppPromoDetailTransformer";
// import { VoucherAppPromoFetcherTransformer } from "../transformer/VoucherAppPromoFetcherTransformer";

import { MqttPublisher } from '../../../lib/mqtt/MqttPublisher'
import { ProductCreateRequest } from '../middleware/request/ProductCreateRequest'
import { ProductDeleteRequest } from '../middleware/request/ProductDeleteRequest '
import { ProductGetDetailRequest } from '../middleware/request/ProductGetDetailRequest'
import { ProductGetRequest } from '../middleware/request/ProductGetRequest'
import { ProductUpdateRequest } from '../middleware/request/ProductUpdateRequest '
import { ProductService } from '../service/ProductService' 

export class ProductController {

	private service: ProductService

	constructor() {
		this.service = new ProductService
	}

	async getProducts(input: any) {
		
		if(input.query.price) {
			input.query.price = parseFloat(input.query.price)
		}
		const [, data] = await Promise.all([
			await ProductGetRequest.check(input.query),
			await this.service.getProducts(input)
		])
		return data
	}

	async getProductDetail(input: any) {
		const [, data] = await Promise.all([
			await ProductGetDetailRequest.check(input.params),
			await this.service.getProductDetail(input.params.id)
		])
		return data; 
	}

	async createProduct(input: any, user: any) {
		const [, data] = await Promise.all([
			await ProductCreateRequest.check(input),
			await this.service.createProduct(input, user)
		])
		return data; 
	}

	async deleteProduct(input: any) {
		const [, data] = await Promise.all([
			await ProductDeleteRequest.check(input.params),
			await this.service.deleteProduct(input.params.id)
		])
		return data; 
	}

	async updateProduct(id: string, input: any) {
		await ProductUpdateRequest.check(input.body)
		// Publish an MQTT message
		const topic = 'update-product';
		const message = JSON.stringify(Object.assign({"id": id}, input.body));
		await (new MqttPublisher()).handle(topic, message) 
	}

}
