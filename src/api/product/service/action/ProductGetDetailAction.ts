import { AbstractProductAction } from '../AbstractProductAction'

export class ProductGetDetailAction extends AbstractProductAction {
	async handle(id: string): Promise<any> {
		try {
			const data = await this.productRepository.getDetailProduct(id);
			return data
		} catch (error) {
			return error
		}
	}
}
