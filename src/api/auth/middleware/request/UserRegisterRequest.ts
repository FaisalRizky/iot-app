import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { UserRegisterRequestInterface } from "./contract/UserRegisterRequestInterface";

/**
 * Class UserRegisterRequest
 */
export class UserRegisterRequest extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<UserRegisterRequestInterface> {
		return await UserRegisterRequest.validator(UserRegisterRequest.schema(), data)
	}

	/**
	 *
	 * @returns
	 */
	static schema(): object {
		return {
			username: [
				RequestValidation.required,
				RequestValidation.string
			],
			password: [
				RequestValidation.required,
				RequestValidation.string
			],
			email: [
				RequestValidation.required,
				RequestValidation.email
			]
		};
	}

}