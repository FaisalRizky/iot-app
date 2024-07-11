import { AbstractProductAction } from '../AbstractProductAction'

export class ProductGetAction extends AbstractProductAction {
	async handle(input: any): Promise<any> {
		try {
			const data = await this.productRepository.getProducts(input);
			return data
		} catch (error) {
			return error
		}
	}
}
