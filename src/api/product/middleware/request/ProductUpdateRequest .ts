import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { ProductUpdateRequestInterface } from "./contract/ProductUpdateRequestInterface";

/**
 * Class ProductUpdateRequest 
 */
export class ProductUpdateRequest  extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<ProductUpdateRequestInterface> {
		return await ProductUpdateRequest.validator(ProductUpdateRequest.schema(), data)
	}

	/**
	 *
	 * @returns
	 */
	static schema(): object {
		return {
			quantity: [
				RequestValidation.required,
				RequestValidation.numeric
			]
		};
	}

}