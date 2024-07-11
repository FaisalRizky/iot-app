import { AbstractProductAction } from '../AbstractProductAction'

export class ProductCreateAction extends AbstractProductAction {
	async handle(input: any, user: any): Promise<any> {
		try {
			const data = await this.productRepository.createProduct(input, user);
			return data
		} catch (error) {
			return error
		}
	}
}
