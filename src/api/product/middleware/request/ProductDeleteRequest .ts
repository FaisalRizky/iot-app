import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { ProductDeleteRequestInterface } from "./contract/ProductDeleteRequestInterface";

/**
 * Class ProductDeleteRequest 
 */
export class ProductDeleteRequest  extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<ProductDeleteRequestInterface> {
		return await ProductDeleteRequest .validator(ProductDeleteRequest .schema(), data)
	}

	/**
	 *
	 * @returns
	 */
	static schema(): object {
		return {
			id: [
				RequestValidation.required,
				RequestValidation.string
			],
		};
	}

}