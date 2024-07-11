import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { ProductCreateRequestInterface } from "./contract/ProductCreateRequestInterface";

/**
 * Class ProductCreateRequest
 */
export class ProductCreateRequest extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<ProductCreateRequestInterface> {
		return await ProductCreateRequest.validator(ProductCreateRequest.schema(), data)
	}

	/**
	 *
	 * @returns
	 */
	static schema(): object {
		return {
			name: [
				RequestValidation.required,
				RequestValidation.string
			],
			price: [
				RequestValidation.required,
				RequestValidation.float
			],
			quantity: [
				RequestValidation.required,
				RequestValidation.numeric
			],
			description: [
				RequestValidation.required,
				RequestValidation.string
			]
		};
	}

}