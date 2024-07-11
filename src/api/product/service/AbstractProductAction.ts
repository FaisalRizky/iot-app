import { ProductRepository } from "../entity/repository/ProductRepository"

export abstract class AbstractProductAction {
	protected productRepository: ProductRepository

	constructor() {
		this.productRepository = new ProductRepository

	}
}