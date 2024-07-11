import { AbstractProductAction } from '../AbstractProductAction'

export class ProductDeleteAction extends AbstractProductAction {
	async handle(id: string): Promise<any> {
		try {
			const data = await this.productRepository.deleteProduct(id);
			return data
		} catch (error) {
			return error
		}
	}
}
