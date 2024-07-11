import { AbstractProductAction } from '../AbstractProductAction'

export class ProductUpdateAction extends AbstractProductAction {
	async handle(id: string, input: any): Promise<any> {
		try {
			const data = await this.productRepository.updateProduct(id, input);
			return data;
		} catch (error) {
			return error
		}
	}
}