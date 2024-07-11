import { RequestValidation } from '../../../../lib/validation/request/RequestValidation';
import { UserRegisterRequestInterface } from "./contract/UserRegisterRequestInterface";

/**
 * Class UserLoginRequest
 */
export class UserLoginRequest extends RequestValidation {
	/**
	 *
	 * @param data
	 */
	static async check(data: any): Promise<UserRegisterRequestInterface> {
		return await UserLoginRequest.validator(UserLoginRequest.schema(), data)
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
			]
		};
	}

}