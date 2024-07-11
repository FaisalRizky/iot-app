import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { ProductGetRequestInterface } from "./contract/ProductGetRequestInterface";

/**
 * Class ProductGetRequest
 */
export class ProductGetRequest extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<ProductGetRequestInterface> {
		return await ProductGetRequest.validator(ProductGetRequest.schema(), data)
	}

	/**
	 *
	 * @returns
	 */
	static schema(): object {
		return {
			name: [
				RequestValidation.string
			],
			price: [
				RequestValidation.float
			],
			sort: [
				RequestValidation.string
			]
		};
	}

}