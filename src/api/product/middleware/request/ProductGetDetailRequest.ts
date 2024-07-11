import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { ProductGetDetailRequestInterface } from "./contract/ProductGetDetailRequestInterface";

/**
 * Class ProductGetDetailRequest
 */
export class ProductGetDetailRequest extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<ProductGetDetailRequestInterface> {
		return await ProductGetDetailRequest.validator(ProductGetDetailRequest.schema(), data)
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