import { UserLoginRequest } from '../middleware/request/UserLoginRequest'
import { UserRegisterRequest } from '../middleware/request/UserRegisterRequest'
import { AuthService } from '../service/AuthService' 

export class AuthController {

	private service: AuthService

	constructor() {
		this.service = new AuthService
	}

	async register(input: any) {
		const [, data] = await Promise.all([
			await UserRegisterRequest.check(input),
			await this.service.register(input)
		])
		return data
	}

	async login(input: any) {
		const [, data] = await Promise.all([
			await UserLoginRequest.check(input),
			await this.service.login(input)
		])
		return data; 
	}

}
